const camelCase = function(input) {
  
  const inputArray = input.split(" ");
  const resultArray = [];
  resultArray.push(inputArray[0]);

  for (let i=1; i < inputArray.length; i++) {

    const wordTail = inputArray[i].slice(1);
    const capitalWord = inputArray[i].charAt(0).toUpperCase() + wordTail;
    resultArray.push(capitalWord);

  }

  const resultString = resultArray.join("");
  return resultString;

};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));