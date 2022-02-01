$(document).ready(function() {
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
  $("#backToTop").on("click", function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const form = $(".new-tweet");
    const textArea = $("#tweet-text");
    form.slideDown("slow", () => {
      textArea.focus();       
    });
  })



  //toggles backToTopButton visibility on scroll
  $(window).scroll(function(){
    // console.log(typeof window.scrollY)
    const backToTopBtn =  $("#backToTop");

    if(window.scrollY === 0){
      backToTopBtn.hide();
    }

    if(window.scrollY > 0 && !backToTopBtn.is(":visible")){
      backToTopBtn.show();
    }

  })
 
});

