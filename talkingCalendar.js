const talkingCalendar = function(date) {
  
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  dateArray = date.split('/');
  const dayInt = parseInt(dateArray[2]);
  let month;
  

  if (dateArray[1] === "01" ) {

    month = months[0];

  } else if (dateArray[1] === "02" ) {

    month = months[1];

  } else if (dateArray[1] === "03" ) {

    month = months[2];
    
  } else if (dateArray[1] === "04" ) {

    month = months[3];
    
  } else if (dateArray[1] === "05" ) {

    month = months[4];
    
  } else if (dateArray[1] === "06" ) {

    month = months[5];
    
  } else if (dateArray[1] === "07" ) {

    month = months[6];
    
  } else if (dateArray[1] === "08" ) {

    month = months[7];
    
  } else if (dateArray[1] === "09" ) {

    month = months[8];
    
  } else if (dateArray[1] === "10" ) {

    month = months[9];
    
  } else if (dateArray[1] === "11" ) {

    month = months[10];
    
  } else if (dateArray[1] === "12" ) {

    month = months[11];
    
  }

  if (dateArray[2] === "01" || dateArray[2] === "21" || dateArray[2] === "31") {

    day = dayInt + "st";

  } else if (dateArray[2] === "02" || dateArray[2] === "22") {

    day = dayInt + "nd";

  } else if (dateArray[2] === "03" || dateArray[2] === "23") {

    day = dayInt + "rd";

  } else if (dateArray[2] === "20" || dateArray[2] === "30") {

    day = dayInt + "ieth";

  } else {

    day = dayInt + "th";

  }

  return month + " " + day + ", " + dateArray[0];

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));