var today = new Date();

var day = today.getDay();

var weekdays = ["Sun", "Mon" , "Tue", "Wed", "Thu", "Fri", "Sat"];

console.log("Today is : " + weekdays[day] + ".");

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

var prepand = (hour < 12) ? "AM" : "PM";

if(hour === 0){
    hour = 12;
    prepand = "AM";
}else if(hour === 12){
    prepand = "PM";
}else if( hour > 12){
    hour -= 12;
    prepand = "PM";
}

minute = minute < 10 ? "0" + minute : minute;
second = second < 10 ? "0" + second : second;

console.log("The current time is " + hour + " " + prepand + ":" + minute + ":" + second + ":");