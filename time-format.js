var today = new Date();

var day = today.getDay();

var daylist = ["Sunday", "Monday", "Tuesday", "Thursday", "Friday", "Saturday"];

console.log("Today is : " + daylist[day] + ".");

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

var prepand = (hour >= 12 ? "PM" : "AM");

if (hour === 0) {
    hour = 12; // Midnight
    prepand = "AM";
} else if (hour === 12) {
    prepand = "Noon"; // Noon
} else if (hour > 12) {
    hour -= 12; // Convert to 12-hour format
}

console.log("Current time: " + hour + " " + prepand + " : " + minute + " : " + second + " . ");