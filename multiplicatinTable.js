const multiplicationTable = function(maxValue) {

  let multiplication = "";

  for (let i=1; i <= maxValue; i++) {

    for (let j=1; j <= maxValue; j++) {

    multiplication += " " + i * j; 

    }

    multiplication += "\n"

  }

  return multiplication;

};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));