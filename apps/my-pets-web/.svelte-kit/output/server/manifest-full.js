export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","icon.png","pictures/petPictureInputAvatar.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.fa7158df.js","app":"_app/immutable/entry/app.f8b20925.js","imports":["_app/immutable/entry/start.fa7158df.js","_app/immutable/chunks/scheduler.e2443e5e.js","_app/immutable/chunks/singletons.4dfc4ce2.js","_app/immutable/chunks/index.808b294c.js","_app/immutable/chunks/paths.a6d55c0a.js","_app/immutable/entry/app.f8b20925.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.e2443e5e.js","_app/immutable/chunks/index.0d43c537.js"],"stylesheets":[],"fonts":[]},
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
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 8 },
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
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(app)/(pets)/[petId]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"petId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(app)/(pets)/[petId]/edit",
				pattern: /^\/([^/]+?)\/edit\/?$/,
				params: [{"name":"petId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
