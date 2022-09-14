const calculateChange = function(total, cash) {

  let denomination = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickle: 5,
    penny: 1,
  }

  let change = {};

  if (total === cash) {

    change = { return: 0 };
    
  }

  if (cash - total < 0) {

    change = { remainingPayment: (total - cash)};

  }

  if (cash - total > 0) {

    let remainder = cash - total;

    
    for (let key in denomination) {
      
      const remainderDevidedByDenomination = remainder/denomination[key];
      
      if (remainderDevidedByDenomination > 1) {
        
        remainder -= (denomination[key] * Math.trunc(remainderDevidedByDenomination));

        change[key] = Math.trunc(remainderDevidedByDenomination);

      }

    }



  }

  return change;

};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));