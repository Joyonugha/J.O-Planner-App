//Ref: https://stackoverflow.com/questions/8623108/on-button-click-select-a-sibling-element-with-jquery
$(document).ready(function () {
    //listen for save button clicks
$('.saveBtn').on('click', function () {
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    //saves in the localStorage (Ref: As shown in class)
    localStorage.setItem(time, value);

    //shows notification that item was saved to localStorage by adding the class 'show'
    $('.notification').addClass('show');

    //Timeout to remove 'show' class after 5 seconds
    setTimeout(function () {
        $('.notification').removeClass('show');
    }, 5000);
})
});
//Function for the current day (Ref: https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript)
function currentDay () {
    var currentDay = dayjs().format('MMMM DD, YYYY')
    $("#currentDay").text("Current Date: " + currentDay)
    console.log(currentDay);
}
currentDay()
//Function for the colour renditions (Ref: as directed by TA)
function renderColors() {
    var currentHour = dayjs().hour();
    // $("#hour-9").addClass("present");

function colorConsoleLog(msg, color) {
    console.log("%c" + msg, "color:" + color + ";font-size:large;");
}

// Log the color for the past, present, and future classes
colorConsoleLog("Past: #d3d3d3", "#d3d3d3");
colorConsoleLog("Present: #ff6961", "#ff6961");
colorConsoleLog("Future: #77dd77", "#77dd77");
}

renderColors()

function hourUpdater() {
    //Gets current number of hours
    var currentHour = 9
//dayjs().hour(); (I commented this out because I want it to display the colours)
    

    //loops through time blocks
    $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);
        console.log(blockHour);
        console.log(currentHour);
        //This function would checks if we have gone past this time
        if (blockHour < currentHour) {
            $(this).addClass('past');
        } else if (blockHour === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        }else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });
}
hourUpdater();

//sets up interval to check if current time needs to be updated
var interval = setInterval(hourUpdater, 15000);

// loads any saved data from localStorage (Ref: Based on the earlier class work)
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

//Displays current day on page
$('#currentDay').text(dayjs().format('dddd, MMMM DD'));


//(For loading data to local storage)
// //or $('.time-block .description').each(function () {
//     var timeId = $(this).closest('.time-block').attr('id');
//     $(this).val(localStorage.getItem(timeId));
// });