export interface HeaderProps {
	text: string;
}

interface coursePart {
	name: string
	exerciseCount: number
}

export interface ContentProps {
	courseParts: coursePart[];
}

export interface TotalProps {
	totalName: string;
	arrayToCount: coursePart[];
}
