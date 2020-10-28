$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    let sentence = $("input#puzzle").val();
    let newString = sentence.split("");
    let vowels = ["a", "o", "u", "e", "i", "A", "O", "U", "E", "I"];
    let newSent = [];
    for (let x = 0; x < newString.length; x++) {
      if (newString[x] === "a" || newString[x] === "o" || newString[x] === "u" || newString[x] === "e" || newString[x] === "e" || newString[x] === "i" || newString[x] === "A" || newString[x] === "O" || newString[x] === "U" || newString[x] === "E" || newString[x] === "I") {
        newSent[x] = "-";
      }  else { newSent[x] = newString[x];
    };
  };

  let finalSent = newSent.join("");


    $(".puzzle").text(finalSent);
    $("#result").show();

  });
});

$(document).ready(function() {
  $("button#hide").click()
  $("#hide").hide(sentence);
})

/*
1. Take a string
2. Separate it
3. Look for vowels
4, substitute vowels for -
5. Connect string
6. Output the string.

Create an array of vowels and run through them
*/

