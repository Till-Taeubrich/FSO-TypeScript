import { ContentProps } from "../types"
import Part from "./Part"

const Content = ({ courseParts }: ContentProps) => (
	<>
		{courseParts.map((part, i) => (
			<Part part={part} key={i}/>
		))}
	</>
)

export default Content 