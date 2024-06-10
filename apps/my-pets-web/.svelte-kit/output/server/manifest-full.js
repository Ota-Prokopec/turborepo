export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","icon.png","icons/icon-128x128.png","icons/icon-144x144.png","icons/icon-152x152.png","icons/icon-192x192.png","icons/icon-384x384.png","icons/icon-512x512.png","icons/icon-72x72.png","icons/icon-96x96.png","manifest.json","pictures/petPictureInputAvatar.png","screenshots/screenshot1.png","screenshots/screenshot2.png","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.1c86ed4d.js","app":"_app/immutable/entry/app.29d57e90.js","imports":["_app/immutable/entry/start.1c86ed4d.js","_app/immutable/chunks/scheduler.b968f1ef.js","_app/immutable/chunks/singletons.2ca7caa5.js","_app/immutable/chunks/index.8f122d9f.js","_app/immutable/chunks/paths.8ac0a231.js","_app/immutable/entry/app.29d57e90.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.b968f1ef.js","_app/immutable/chunks/index.facb08f8.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js'))
		],
		routes: [
			{
				id: "/(app)/(pets)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(app)/account/settings",
				pattern: /^\/account\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(app)/(pets)/addpet",
				pattern: /^\/addpet\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/auth",
				pattern: /^\/auth\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/auth/oauth2/failure",
				pattern: /^\/auth\/oauth2\/failure\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/auth/oauth2/success",
				pattern: /^\/auth\/oauth2\/success\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(app)/(pets)/notfound",
				pattern: /^\/notfound\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(app)/(pets)/pet/[petId]",
				pattern: /^\/pet\/([^/]+?)\/?$/,
				params: [{"name":"petId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(app)/(pets)/pet/[petId]/edit",
				pattern: /^\/pet\/([^/]+?)\/edit\/?$/,
				params: [{"name":"petId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
