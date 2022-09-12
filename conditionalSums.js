const conditionalSum = function(values, condition) {
  
  let sum = 0;

  values.forEach(item => {

    if (condition === "even") {

      if (item % 2 === 0) {

        sum += item;
  
      }

    }

    if (condition === "odd") {

      if (item % 2 !== 0) {

        sum += item;

      }

    }

  })

  return sum;

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));