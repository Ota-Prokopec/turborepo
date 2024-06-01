import { Query } from '@repo/appwrite-ssr-graphql'
import collections from './collections'

type CollectionName = keyof ReturnType<typeof collections>
import {
	LocationForNotificationsDocument,
	MonumentLikeDocument,
	PlaceDetailDocument,
	TMonumentDocument,
	TokenDocument,
	UserInfoDocument,
} from '@repo/ts-types'

const query = {
	userInfo: Query<UserInfoDocument>(),
	monument: Query<TMonumentDocument>(),
	placeDetail: Query<PlaceDetailDocument>(),
	token: Query<TokenDocument>(),
	monumentLike: Query<MonumentLikeDocument>(),
	locationForNotification: Query<LocationForNotificationsDocument>(),
} satisfies Record<CollectionName, any>

export default query
