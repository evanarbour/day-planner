var plannerContainer = $('.container');
var hour;
// this creates the header with the current day
var today = moment();
$('#currentDay').text(today.format('dddd, MMMM Do, YYYY'));


// dynamically creates planner in browser 
function createRows() {
    // sets the hour to a variable and loops through from 9-17 (5pm)
    for (let i = 9; i <= 17; i++) {
        rowDiv = $(`<div class="row">`);
        columnTime = $(`<div class="col-1 hour">${displayAmPm(i)}</div>`);
        columnInput = $(`<div class="col-10"><input data-input="${i}" id="inputText${i}" class="inputText input-field" type="text" name="userInput"></div>`);
        columnSaveBtn = $(`<div class="col-1"><button data-id="${i}" id="savePlanner" class="btn btn-success"><i class="fas fa-save"></i>Save</button></div>`);
        rowDiv.append(columnTime);
        rowDiv.append(columnInput);
        rowDiv.append(columnSaveBtn);
        plannerContainer.append(rowDiv);
        
    }
        // find the save button, and create a click event that sets input to localStorage
        $("button.btn.btn-success").click(function(){ 
       
        // create a variable that connects to the specific clicked button on the page and takes its id
        var buttonID = $(this).data('id');
        
        // navigated through the HTML to find the input value typed by the user.
        // .parent = columnSaveBtn, .siblings = other columns in the rowDiv, search other columns for "input", select the value (user input)
        var inputText = $(this).parent().siblings().find("input").val();

        // set the data to a key:value pair and save in localStorage
        localStorage.setItem(buttonID, inputText);
        event.preventDefault();
    });
};

// creates the "am" or "pm" after the displayed hour of the planner
function displayAmPm (hour) {
    var ampm = '';
    var displayHour = 0;
    if (hour > 12) {
    displayHour = hour - 12;
    ampm = 'pm';
    } else if (hour == 12) {
    displayHour = hour
    ampm = 'pm';
    } else {
    displayHour = hour
    ampm = 'am';
    }
    return displayHour + '' + ampm
};

// changes the color of the row based on the hour
function changeRowColor() {
    // creates a variable of the current time in HOURS
    var currentHour = parseInt(moment().format('H'));
    // make a for loop to sort through the hours on the planner
    for (var i = 9; i <= 17; i++) {
        if (currentHour > i) {
         $(`#inputText${i}`).addClass('past');
        } else if (currentHour < i) {
            $(`#inputText${i}`).addClass('future');
        } else {
            $(`#inputText${i}`).addClass('present');
        }
    }

}

// display any previously stored data on the page 
function getLocalStorage() {
    // sort through the hours in the planner
    for (var i = 9; i <= 17; i++) {
        // display the stored data to the appropriate times
        $(`#inputText${i}`).val(localStorage.getItem(i));
    }
};

createRows();
changeRowColor();
getLocalStorage();



