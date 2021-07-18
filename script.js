var plannerRow = $('.container')
var hour = '';
// this creates the header with the current day
var today = moment();
$('#currentDay').text(today.format('dddd, MMMM Do, YYYY'));

// creates a variable of the current time in HOUR
var currentHour = parseInt(moment().format('H'));



// specifies the hours of the planner: 9:00am-5:00pm (17:00)
function displayRows() {
    for (let hour = 9; hour <= 17; hour++) {
        var displayHour = 0;
        var ampm = '';
        if (hour > 12) {
            displayHour = hour - 12;
            ampm = 'pm';
        } else if (hour == 12) {
            displayHour = hour;
            ampm = 'pm';
        } else {
            displayHour = hour;
            ampm = 'am';
        };
    
    //create rows for the planner with class of "row" to connect to Bootstrap styling.
    let $rowDiv = $('<div>');
    $rowDiv.addClass('row');

    // create columns for the time element of planner
    let $columnTimeDiv = $('<div>');
    $columnTimeDiv.addClass('col-1 hour');

    // create a <span> element to display the number value of the hour
    let $timeDisplay = $('<span>')
    $timeDisplay.text(`${displayHour} ${ampm}`);

    // create columns for the event element of the planner
    let $columnEventWrapper = $('<div>');
    $columnEventWrapper.addClass('col-10 input-column');

    // create input field
    let $eventInputField = $('<input type="text">')

    // create save button
    let $saveBtn = $('<div>');
    $saveBtn.addClass('saveBtn col-1');
    $saveBtn.text('Save Event');
    
    // append time elements to HTML
    plannerRow.append($rowDiv);
    $rowDiv.append($columnTimeDiv);
    $columnTimeDiv.append($timeDisplay);
    
    // append event elements to HTML
    plannerRow.append($rowDiv);
    $rowDiv.append($columnEventWrapper);
    $columnEventWrapper.append($eventInputField);
    
    // append save button to HTML
    plannerRow.append($rowDiv);
    $rowDiv.append($saveBtn);

    // color each row based on current time
    $columnEventWrapper.each(function() {
        if (currentHour > hour ) {
            $columnEventWrapper.addClass('past');
        } else if (currentHour < hour) {
            $columnEventWrapper.addClass('future');
        } else {
            $columnEventWrapper.addClass('present');
        }
        
    });
    
    }
};

displayRows();


