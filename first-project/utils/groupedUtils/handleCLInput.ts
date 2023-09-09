import filterCLArgs from "../filterCLArgs"
import checkNumbers from "../checkNumber"
import turnToNumber from "../turnToNumber"

const handleCLInput = () => {
  const commandLineArguments = filterCLArgs(process.argv)
  const convertedArray = turnToNumber(commandLineArguments)

  checkNumbers(convertedArray)

  return convertedArray
}

export default handleCLInput