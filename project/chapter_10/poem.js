$("#info").html("<p>The info will go here.</p>");
let line1, line1Text; // don’t need the intermediate step of line1TextArray
line1 = [{text:  "What", info: "Anaphora: The repetition of a word or phrase at the beginning of (usually successive) lines. For example, the use of What in the first four lines."}, 
    {text: "hurrying"}, {text: "human"}, {text: "tides"}, 
    {text: "or"}, {text: "day"}, {text: "or"}, {text: "night!"}];
// Create a blank string that opens two tags.
line1Text = "<blockquote><p>"; // opening tags for blockquote and p, we close them in the loop below
line1.map(function(word){
  // Define a variable that will be the entirety of a single
  // word-sized chunk of information.
  let wordString;
  wordString = word.text;
  // Test to see if the .info property exists.
  if (word.info){
    // If it does, surround wordString in an <a> tag.
    wordString = "<a href='#' data-info='" + word.info + "'>" + wordString + "</a>";
  }
  // Add wordString plus a space to the line1Text.
  line1Text = line1Text + wordString + " ";
});
$("#poem").html(line1Text);
$("#poem a").click(function(){
    // Define the text and the word that was clicked.
    let infoText, clickedWord, clickedInfo;
    clickedWord = $( this ).text();
    clickedInfo = $( this ).data("info");
    infoText = clickedInfo;
    $("#info").html(infoText);
  });
