import { ContentProps } from "../types"

const CourseParts = ({ courseParts }: ContentProps) => (
	<>
		{courseParts.map((part, i) => (
			<p key={`part ${i}`}>
				{part.name} {part.exerciseCount}
			</p>
		))}
	</>
)

export default CourseParts