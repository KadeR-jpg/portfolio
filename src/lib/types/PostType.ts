export type Tags = 'sveltekit' | 'svelte' | 'talking' | 'random' | 'math';
export const tagClasses: Record<string, string> = {
  svelte: 'bg-orange-100 text-orange-600 dark:bg-orange-300 dark:text-orange-800 ',
  talking: 'bg-sky-100 text-fuchsia-600 dark:bg-sky-300 dark:text-fuchsia-800 ',
  random: 'bg-violet-100 text-violet-600 dark:bg-violet-300 dark:text-violet-800',
  math: 'bg-lime-50 text-lime-600 dark:bg-lime-300 dark:text-lime-800',
  music: 'bg-yellow-50 text-orange-600 dark:bg-yellow-300 dark:text-orange-800'
};
export type Post = {
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: Tags[];
  published: boolean;
};