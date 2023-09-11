import filterCLArgs from "../filterCLArgs"
import { checkNumberArray } from "../checkDatatype"
import turnToNumber from "../turnToNumber"

const handleCLInput = () => {
  const commandLineArguments = filterCLArgs(process.argv)
  const convertedArray = turnToNumber(commandLineArguments)

  checkNumberArray(convertedArray)

  return convertedArray
}

export default handleCLInput