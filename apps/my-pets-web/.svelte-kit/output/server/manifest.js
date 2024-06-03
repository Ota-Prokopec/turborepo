export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico"]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.D5aoHi7U.js","app":"_app/immutable/entry/app.CZAxzmX-.js","imports":["_app/immutable/entry/start.D5aoHi7U.js","_app/immutable/chunks/scheduler.BQLk4kXZ.js","_app/immutable/chunks/singletons.DtQy3ke2.js","_app/immutable/chunks/paths.1MP3SlaE.js","_app/immutable/entry/app.CZAxzmX-.js","_app/immutable/chunks/scheduler.BQLk4kXZ.js","_app/immutable/chunks/index._cVNW4if.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/auth",
				pattern: /^\/auth\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
