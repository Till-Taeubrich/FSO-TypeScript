interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartDescription extends CoursePartBase {
  description: string;
}

interface CoursePartBasic extends CoursePartDescription {
  kind: "basic"
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group"
}

interface CoursePartBackground extends CoursePartDescription {
  backgroundMaterial: string;
  kind: "background"
}

interface CoursePartSpecial extends CoursePartDescription {
  requirements: String[];
  kind: 'special';
}

export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial

export interface HeaderProps {
	text: string;
}

export interface TotalProps {
	totalName: string;
	arrayToCount: CoursePart[];
}

export interface ContentProps {
	courseParts: CoursePart[];
}

export interface PartProps {
	part: CoursePart
}