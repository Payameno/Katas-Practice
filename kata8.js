const repeatNumbers = function(data) {

  let repeatedData = [];
  
  data.forEach(item => {

    let counter = 0;
    let repeatedNum = "";

    while(counter < item[1]) {

      repeatedNum += item[0];

      counter++;

    }
    
    repeatedData.push(repeatedNum);

  });

  return repeatedData.join(', ');

};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));