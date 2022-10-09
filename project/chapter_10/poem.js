// Step 1 - define the extra information for poem
$("#info").html("<p>Extra info will go here.</p>");

// Step 2 - display poem and allow clicking and info property display
$.getJSON("poem.json", function(data){ // data is JSON object
  let poemText; 
  poemText = "<blockquote><p>"; 
  //  map over data's .lines property
  data.lines.map(function(line){ 
    let lineText = "";
    // map over each line.
    line.map(function(word){
      let wordString;
      wordString = word.text;
      if (word.info){
        wordString = "<a href='#' data-info='" + word.info + "'>" + wordString + "</a>";
      }
      lineText = lineText + wordString + " "; // add the word to the lineText with a space
    });
    poemText = poemText + lineText + "<br/>"; // add lineText to poemText with a break
  });
  poemText = poemText + "</p></blockquote>";
  $("#poem").html(poemText);
 
  $("#poem a").click(function(){
    let infoText, clickedWord, clickedInfo;
    clickedWord = $( this ).text();
    clickedInfo = $( this ).data("info") + "<br>" + $( this ).data("wiki");
    infoText = clickedInfo;
    $("#info").html(infoText);
  });
});