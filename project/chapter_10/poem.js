$('#info').html("<p>The info will go here</p>");

let line1, line1Text;

line1 = [{text: "What", info: "Anaphora: The repetition of a word or phrase at \
    the beginning of (usually successive) lines. For example, the use of What \
    in the first four lines."}
    , {text: "hurrying"}, {text: "human"}, {text: "tides"},
    {text: "or"}, {text: "day"}, {text: "or"}, {text: "night!"}];

line1Text = line1.map(function(word){
    return word.text;
}).join(" ");

$("#poem").html("<p>" + line1Text + "<br /></p>");
