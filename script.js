var today = moment();
$('#currentDay').text(today.format('dddd, MMMM Do, YYYY'));

var currentHour = moment().format('H');
console.log(currentHour);

function displaycurrentHour(currentHour) {
    // if the hour is equal to the current hour, set the class to "present"

    // if the hour is less than the current hour, set it to "past"

    // if the hour is more than the current hour, set it to "future"
}
// use moment.js to connect time of day to class of "past", "present" and "future" to create stylings on webpage
// moment().toObject() ?? returns an object containing time and can set that equal to variable and then if statement?


// how to set the value of the html boxes compared to the time of day?
// maybe create an array 