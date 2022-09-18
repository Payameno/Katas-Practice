const makeCase = function(input, caseStyle) {

  const inputArray = input.split(" ");
  const resultArray = [];
  
  if (caseStyle === "camel") {
    for (let i=1; i < inputArray.length; i++) {

    resultArray.push(inputArray[0]);
  
  
      const wordTail = inputArray[i].slice(1);
      const capitalWord = inputArray[i].charAt(0).toUpperCase() + wordTail;
      resultArray.push(capitalWord);
  
    }
  
  }

  if (caseStyle === "pascal") {

    for (let i=0; i < inputArray.length; i++) {
  
      const wordTail = inputArray[i].slice(1);
      const capitalWord = inputArray[i].charAt(0).toUpperCase() + wordTail;
      resultArray.push(capitalWord);
  
    }

  }

  if (caseStyle === "snake") {

    for (let i=0; i < inputArray.length; i++) {

      if ( i >= 0 && i !== inputArray.length - 1 ) {

        const underscoreAdded = inputArray[i] + "_";
        resultArray.push(underscoreAdded);

      }

      if ( i === inputArray.length - 1 ) {

        const underscoreAdded = inputArray[i];
        resultArray.push(underscoreAdded);

      }

    }

  }

  if (caseStyle === "kebab") {

    for (let i=0; i < inputArray.length; i++) {

      if ( i >= 0 && i !== inputArray.length - 1 ) {

        const underscoreAdded = inputArray[i] + "-";
        resultArray.push(underscoreAdded);

      }

      if ( i === inputArray.length - 1 ) {

        const underscoreAdded = inputArray[i];
        resultArray.push(underscoreAdded);

      }

    }


  }

  if (caseStyle === "title") {

    for (let i=0; i < inputArray.length; i++) {

      if ( i >= 0 && i !== inputArray.length - 1 ) {

        const wordTail = inputArray[i].slice(1);
        const capitalWord = inputArray[i].charAt(0).toUpperCase() + wordTail;
        resultArray.push(capitalWord + " ");

      }
  
      if ( i === inputArray.length - 1 ) {

        const wordTail = inputArray[i].slice(1);
        const capitalWord = inputArray[i].charAt(0).toUpperCase() + wordTail;
        resultArray.push(capitalWord);
  
    }

    }
  }

  const resultString = resultArray.join("");
  return resultString;

}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));