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
        // creates save button click event and sets input to localStorage
        $("button.btn.btn-success").click(function(){ 
       
        var buttonID = $(this).data('id');
        var inputText = $(this).parent().siblings().find("input").val();

        localStorage.setItem(buttonID, inputText);
        event.preventDefault();
    });
};


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

function changeRowColor() {
    // creates a variable of the current time in HOUR
    var currentHour = parseInt(moment().format('H'));
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


function getLocalStorage() {
    for (var i = 9; i <= 17; i++) {
        $(`#inputText${i}`).val(localStorage.getItem(i));
    }
};

createRows();
changeRowColor();
getLocalStorage();



