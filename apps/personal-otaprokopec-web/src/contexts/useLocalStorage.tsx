import { diff } from 'deep-object-diff'
import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from 'react'
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
		const [localStoragePayload, setLocalStoragePayload] = useState<zodSchemaType>({})

		useEffect(() => {
			setLocalStoragePayload(zodSchema.parse(getLocalStorageData()))
		}, [])

		useEffect(() => {
			const changes = diff(
				zodSchema.parse({ ...localStorage }),
				zodSchema.parse(localStoragePayload),
			)

			Object.entries(changes).map(([key, value]) => {
				if (typeof value === 'undefined') localStorage.removeItem(key)
				else localStorage.setItem(key, value)
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
		const value = localStorage[name]
		const setValue = (value: zodSchemaType[typeof name]) =>
			setLocalStorage((c) => ({ ...c, value }))
		return [value, setValue]
	}

	return { useLocalStorageContext, useLocalStorageValue, LocalStorageContextProvider }
}

const { LocalStorageContextProvider, useLocalStorageValue, useLocalStorageContext } =
	localStorageContext(
		z.object({ key: z.string().optional(), LikedbikePictures: z.string().optional() }),
	)

const getLocalStorageData = () => {
	const keys = Array.from({ length: localStorage.length })
		.map((_item, index) => localStorage.key(index))
		.filter((key) => typeof key === 'string')

	return keys
		.map((key) => ({ [key]: localStorage.getItem(key) }))
		.reduce(
			(object, currentObject) => ({ ...currentObject, ...object }),
			{} as { [x: string]: string },
		)
}
