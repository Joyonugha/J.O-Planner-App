$(document).ready(function () {
    //listen for save button clicks
$('.saveBtn').on('click', function () {
    var value = $(this).siblings('description').val();
    var time = $(this).parent().attr('id');

    //saves in the localStorage
    localStorage.setItem(time, value);

    //shows notification that item was saved to localStorage by adding the class 'show'
    $('.notification').addClass('show');

    //Timeout to remove 'show' class after 5 seconds
    setTimeout(function () {
        $('notification').removeClass('show');
    }, 5000);
});

function hourUpdater() {
    //Gets current number of hours
    var currentHour = day.js().hour();

    //loops through time blocks
    $('.time-block').each(function () {
        var blockHour = parseInt($(this).attr('id').split('-')[1]);

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

//loads any saved data from localStorage





}