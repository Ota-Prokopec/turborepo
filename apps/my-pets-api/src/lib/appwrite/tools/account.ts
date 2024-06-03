import type { Types } from '@repo/appwrite-ssr-graphql'
import { TUserPreferences } from '@repo/my-pets-tstypes'

type AppwriteSSRReturnTypeClient = ReturnType<Types.AppwriteSSR['none']>

export const getAccount = (Auth: AppwriteSSRReturnTypeClient['Auth']) => {
	return new Auth<TUserPreferences>()
}
