import { Types } from '@repo/appwrite-client';
import {
	LocationForNotificationsDocument,
	LocationForNotificationsDocumentCreate,
	MonumentLikeDocument,
	MonumentLikeDocumentCreate,
	PlaceDetailDocument,
	PlaceDetailDocumentCreate,
	TMonumentDocument,
	TMonumentDocumentCreate,
	TokenDocument,
	TokenDocumentCreate,
	UserInfoDocument,
	UserInfoDocumentCreate
} from '@repo/ts-types';

export default (Collection: Types.Appwrite['Collection']) => {
	return {
		userInfo: new Collection<UserInfoDocument, UserInfoDocumentCreate>('experiences', 'userInfo'),

		monument: new Collection<TMonumentDocument, TMonumentDocumentCreate>(
			'experiences',
			'monuments'
		),
		token: new Collection<TokenDocument, TokenDocumentCreate>('experiences', 'tokens'),
		placeDetail: new Collection<PlaceDetailDocument, PlaceDetailDocumentCreate>(
			'experiences',
			'placeDetails'
		),
		monumentLike: new Collection<MonumentLikeDocument, MonumentLikeDocumentCreate>(
			'experiences',
			'monument-likes'
		),

		locationForNotification: new Collection<
			LocationForNotificationsDocument,
			LocationForNotificationsDocumentCreate
		>('experiences', 'locationForNotifications')
	};
};
