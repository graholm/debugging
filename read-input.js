var input = $("#input");
input.keydown(function(keydownEvent) {
  if (keydownEvent.keyCode == 13) {          
    var textToDisplay = input.val()

    console.log(textToDisplay)
    
    $("#display").html (textToDisplay)
  }  
})