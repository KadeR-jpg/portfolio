export type CardType = 'Job' | 'Project';
export type CardProps = {
	title: string;
	bps: string[];
	fromTo?: string;
	blobColor?: string;
	link?: string;
};
