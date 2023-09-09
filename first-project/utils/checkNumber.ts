const checkNumbers = (numberArray:number[]) => {
  numberArray.forEach(num => {
    if (isNaN(num)) {
      throw new Error("One or more provided values are not numbers!");
    }
  });
}

export default checkNumbers