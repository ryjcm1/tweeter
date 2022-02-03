$(() => {

  //sets the counter value to amount of character left out of 140
  $("#tweet-text").on("input",function() {
    let charCount = 140 - $(this).val().length;
    let charCountDisplay = $(this).parent().children(".tweet-submit").children(".counter");
    
    //assigns counter value
    charCountDisplay.html(charCount);

    //adds class to change text colour when over character limit
    if (charCount < 0) {
      return charCountDisplay.addClass("danger");
    }

    return charCountDisplay.removeClass("danger");
    

  });



  //scrolls to the top and toggles the form and focuses on the textarea
  $(".back-to-top").on("click", (event) => {
    event.preventDefault();

    $('html, body').animate({ scrollTop: 0 }, ()=> {
      const form = $(".new-tweet");
      const textArea = $("#tweet-text");
      
      form.slideDown();
      textArea.focus();

    });
  });



  //toggles backToTopButton visibility on scroll
  $(window).scroll(() => {
    const backToTopBtn =  $(".back-to-top");

    if (window.scrollY === 0) {
      backToTopBtn.hide();
    }

    //prevent show method when button is already visible
    if (window.scrollY > 0 && !backToTopBtn.is(":visible")) {
      backToTopBtn.show();
    }

  });
 
});

