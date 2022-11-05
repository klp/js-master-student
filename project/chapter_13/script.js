// alert if 'enter' key is pressed
$(document).on('keypress', function(event) {
    if(event.which == 13 ) {
        console.log("You pressed enter");
    }
});