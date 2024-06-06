export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11')
];

export const server_loads = [0];

export const dictionary = {
		"/(app)/(pets)": [5,[2,3]],
		"/(app)/(pets)/addpet": [7,[2,3]],
		"/auth": [9,[4]],
		"/auth/oauth2/failure": [10,[4]],
		"/auth/oauth2/success": [~11,[4]],
		"/(app)/(pets)/notfound": [8,[2,3]],
		"/(app)/(pets)/[petId]": [6,[2,3]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';