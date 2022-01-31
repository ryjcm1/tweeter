$(document).ready(function() {
  // --- our code goes here ---

  $("#tweet-text").keyup(function(){
    let charCount = 140 - this.value.length;
    let charCountDisplay = $(this).parent().children(".tweet-submit").children(".counter");

    //adds class to change text colour when over character limit 
    if(charCount < 0){
      charCountDisplay.addClass("danger")
    }else{
      charCountDisplay.removeClass("danger")
    }

    charCountDisplay.val(charCount)
    
  })
});