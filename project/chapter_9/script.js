
// alert("Everything's coming up Milhouse!");
// $("h1").hide();
$("#noShow").hide();
$("h1").html("The Best Jokes Ever!")
$("#joke").append("<p>What do you call a fake noodle? <br /> A. An impasta</p>");

// modify ccs style for button
$("#toggleJokes").css({
    "background-color": "orange",
    "color": "white",
    "font-size": "20px",
    "padding": "10px",
    "border-radius": "5px",
    "border": "2px solid black",
    "margin": "10px"
});

$("#toggleJokes").click(function() {
    $("#joke").toggle();
});

$("#toggleColors").click(function() {
    $("body").css("background-color", "white");
    $(".formatText").css("color", "black");
    $()
});

// worth thinking about how to get the button to toggle back
//  https://stackoverflow.com/questions/41351730/change-style-back-and-forth

let question = prompt("Are these jokes good or bad?")

if (question == "bad") {
    $("h1").html("Worst Jokes Ever!");
} else if (question == "good") {
    $("h1").html("Best Bad Jokes Ever!");
} else {
    // do nothing
}