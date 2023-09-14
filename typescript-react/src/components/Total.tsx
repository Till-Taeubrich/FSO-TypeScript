import { TotalProps } from "../types";

const Total = ({ totalName, arrayToCount }: TotalProps) => (
	<p>
		Number of {totalName}{' '}
		{arrayToCount.reduce((carry, part) => carry + part.exerciseCount, 0)}
	</p>
)

export default Total;
