function getLocalDay(date) { return (date.getDay() == 0) ? 7 : date.getDay() ; }

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) );