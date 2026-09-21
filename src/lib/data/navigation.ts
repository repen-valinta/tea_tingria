import type { RouteId } from '$app/types';

export const subLinks = [
	{
		to: '/esitykset/monivanne',
		link: 'Monivanne'
	},
	{
		to: '/esitykset/burleski',
		link: 'Burleski'
	},
	{
		to: '/esitykset/tuliesitykset',
		link: 'Tuliesitykset'
	},
	{
		to: '/esitykset/aluehahmot',
		link: 'Aluehahmot'
	}
] satisfies {
	to: RouteId;
	link: string;
}[];
