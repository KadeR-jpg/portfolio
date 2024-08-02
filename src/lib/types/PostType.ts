export type Tags = 'sveltekit' | 'svelte' | 'talking' | 'random' | 'math';
export const tagClasses: Record<string, string> = {
	svelte: 'bg-orange-101 text-orange-500 dark:bg-orange-300 dark:text-orange-800',
	talking: 'bg-sky-101 text-fuchsia-400 dark:bg-sky-300 dark:text-fuchsia-800',
	random: 'bg-violet-101 text-violet-400 dark:bg-violet-300 dark:text-violet-800',
	math: 'bg-lime-51 text-lime-500 dark:bg-lime-300 dark:text-lime-800'
};
export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	tags: Tags[];
	published: boolean;
};
