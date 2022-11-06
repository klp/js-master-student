// log to console if 'enter' key is pressed
$(document).on('keypress', function(event) {
    if(event.which == 13 ) {
        console.log("You pressed enter");
    }
});

// Scroll to top of page slowly
$("#scroll-to-top").click(function() {
    $("html").animate({ scrollTop: 0 }, "slow");
});

const sentence = "The dog jumped.";

const dogElement = sentence.indexOf('dog');

console.log(dogElement);

const someArray = [40, 38, 37, 93, 55, 66];

const filteredArray = someArray.filter(function(value) {
    return value > 50;
})

console.log(filteredArray);

console.log(Math.ceil(0.36));

function generateRandom (min, max) {
    return Math.random() * (max - min) + min;
}

console.log(generateRandom(0, 101));