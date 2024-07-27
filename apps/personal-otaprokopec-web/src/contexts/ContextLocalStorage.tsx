import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useState,
} from 'react'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { z, ZodSchema } from 'zod'

export type LocalStorageProviderProps = {
	children: ReactNode
}

export const localStorageContext = <
	TZodSchema extends z.ZodObject<Record<string, ZodSchema>>,
>(
	zodSchema: TZodSchema,
) => {
	type zodSchemaType = z.infer<TZodSchema>

	const LocalStorageContext = createContext<{
		localStorage: z.TypeOf<TZodSchema>
		setLocalStorage: Dispatch<SetStateAction<z.TypeOf<TZodSchema>>>
	} | null>(null)

	const useLocalStorageContext = () => {
		const context = useContext(LocalStorageContext)
		if (!context) throw new Error('Context has to be used within the context provider')
		return context
	}

	const LocalStorageContextProvider = ({ children }: LocalStorageProviderProps) => {
		const [localStoragePayload, setLocalStoragePayload] = useState<zodSchemaType>(
			zodSchema.parse(getLocalStorageData()),
		)

		useDeepCompareEffect(() => {
			const input = [
				zodSchema.parse({ ...getLocalStorageData() }),
				zodSchema.parse(localStoragePayload),
			] as const

			const changes = compareObjects(...input)

			Object.entries(changes).map(([key, type]) => {
				const value = localStoragePayload[key]
				if (type === 'changed') localStorage.setItem(key, JSON.stringify(value))
				else if (type === 'removed') localStorage.removeItem(key)
			})
		}, [localStoragePayload])

		return (
			<LocalStorageContext.Provider
				value={{
					localStorage: localStoragePayload,
					setLocalStorage: setLocalStoragePayload,
				}}
			>
				{children}
			</LocalStorageContext.Provider>
		)
	}

	const useLocalStorageValue = (name: keyof zodSchemaType) => {
		const { setLocalStorage, localStorage } = useLocalStorageContext()

		const setValue = (
			x:
				| zodSchemaType[typeof name]
				| ((currentValue: zodSchemaType[typeof name]) => zodSchemaType[typeof name]),
		) => {
			setLocalStorage((c) => {
				//@ts-ignore
				const value = typeof x === 'function' ? x(c[name]) : x

				return { ...c, ...{ [name]: value } }
			})
		}
		return [localStorage[name], setValue] as const
	}

	return { useLocalStorageContext, useLocalStorageValue, LocalStorageContextProvider }
}

const getLocalStorageData = () => {
	const keys = Array.from({ length: localStorage.length })
		.map((_item, index) => localStorage.key(index))
		.filter((key) => typeof key === 'string')

	return keys
		.map((key) => {
			const value = localStorage.getItem(key)
			return { [key]: value ? JSON.parse(value) : null }
		})

		.reduce(
			(object, currentObject) => ({ ...currentObject, ...object }),
			{} as { [x: string]: string },
		)
}

const compareObjects = <
	TObject1 extends Record<string, unknown>,
	TObject2 extends Record<string, unknown>,
>(
	object1: TObject1,
	object2: TObject2,
) => {
	return Object.entries(object2)
		.map(([key, value]) => {
			if (JSON.stringify(value) === JSON.stringify(object1[key]))
				return { [key]: 'unchanged' } as const
			else {
				if ((object1[key] && object2[key]) || object2[key])
					return { [key]: 'changed' } as const
				else return { [key]: 'removed' } as const
			}
		})
		.reduce<Record<string, 'unchanged' | 'changed' | 'removed'>>(
			(a, v) => ({
				...a,
				...v,
			}),
			{},
		)
}
