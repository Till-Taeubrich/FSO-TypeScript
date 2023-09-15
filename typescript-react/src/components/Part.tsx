import { CoursePart, PartProps } from "../types"
import assertNever from "./utils/typeChecking";

const renderPart = (part :CoursePart) => {
  switch (part.kind) {
    case 'basic':
      return (
        <>
          <div><b>{part.name} {part.exerciseCount}</b></div>
          <div>{part.description}</div>
          <br />
        </>
      )
    case 'group':
      return (
        <>
          <div><b>{part.name} {part.exerciseCount}</b></div>
          <div>{part.groupProjectCount}</div>
          <br />
        </>
      )
    case 'background':
      return (
        <>
          <div><b>{part.name} {part.exerciseCount}</b></div>
          <div>{part.description}</div>
          <div>{part.backgroundMaterial}</div>
          <br />
        </>
      )
    case 'special':
      return (
				<>
					<div>
						<b>
							{part.name} {part.exerciseCount}
						</b>
					</div>
					<div>{part.description}</div>
					<div>
						required skills:{' '}
						{part.requirements.map((requirement) => (
							<span>{requirement} </span>
						))}
					</div>
					<br />
				</>
			)
    default:
      return assertNever(part)
  }
}


const Part = ({part}: PartProps) => (
  <>
    {renderPart(part)}
  </>
)

export default Part
  // <p>
  //   {part.name} {part.exerciseCount}
  // </p>