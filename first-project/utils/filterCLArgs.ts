let filteredArray: string[] = []

const filterCLArgs = (unfilteredArray:string[]) => {
  for (let i = 0; i < unfilteredArray.length; i++) {
    if (i >= 2) {
      filteredArray.push(unfilteredArray[i])
    }
  }
  return filteredArray
}


export default filterCLArgs