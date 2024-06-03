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
		client: {"start":"_app/immutable/entry/start.CZAUxSK6.js","app":"_app/immutable/entry/app.Vf57bf6i.js","imports":["_app/immutable/entry/start.CZAUxSK6.js","_app/immutable/chunks/scheduler.BQLk4kXZ.js","_app/immutable/chunks/singletons.CzqJa-Kc.js","_app/immutable/chunks/paths.D9aOHf31.js","_app/immutable/entry/app.Vf57bf6i.js","_app/immutable/chunks/scheduler.BQLk4kXZ.js","_app/immutable/chunks/index._cVNW4if.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
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
