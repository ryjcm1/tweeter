$(() => {
  // --- our code goes here ---

  $("#tweet-text").on("input",function(){
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



  //scroll to top and display form and focuses on the textarea
  $("#backToTop").on("click", () => {

    $('html, body').animate({ scrollTop: 0 }, ()=> {
      const form = $(".new-tweet");
      const textArea = $("#tweet-text");
      
      form.slideDown();
      textArea.focus();       

    });
  })



  //toggles backToTopButton visibility on scroll
  $(window).scroll(() => {
    const backToTopBtn =  $("#backToTop");

    if(window.scrollY === 0){
      backToTopBtn.hide();
    }

    if(window.scrollY > 0 && !backToTopBtn.is(":visible")){
      backToTopBtn.show();
    }

  })
 
});

