export type CardType = 'Job' | 'Project';
export interface CardProps {
	title: string;
	bps: string[];
	fromTo?: string;
	blobColor?: string;
	link?: string;
}
