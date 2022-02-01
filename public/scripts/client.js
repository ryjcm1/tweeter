/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  const createTweetElement  = function(data){
    const $tweet = $(`<article class="tweet">
    <div class="author">
      <div class="profile">
        <img src=${data.user.avatars} alt="headshot">
        <span>${data.user.name}</span>
      </div>
      <div class="handle">
        <span>${data.user.handle}</span>
      </div>
    </div>
    
    <div class="message">
      <p>${escape(data.content.text)}</p>
    </div>
    
    <div class="message-information">
      <div class="date">
        <span>${timeago.format(data.created_at)}</span>
      </div>
      
      <div class="social">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </div>
    
    </article>`);
  
    return $tweet;
  }


  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container

    for(let tweet of tweets){
      let newTweetArticle = createTweetElement(tweet);
      $('.tweets-container').prepend(newTweetArticle);
    }
  }


  //loads tweet dependent on a string query value
  const loadTweets = function(query){
    if(query === "all"){
      $.ajax('/tweets', { method: 'GET' })
      .then(function (tweets) {
        console.log('Success: ', tweets);
        renderTweets(tweets);
    })}

    if(query === "last"){
      $.ajax('/tweets', { method: 'GET' })
      .then(function (tweets) {
        let latestTweet = tweets[tweets.length - 1];
        console.log('Latest Tweet: ', latestTweet);
        renderTweets([latestTweet]);
    })
    }

  }


  //prevents untrusted text
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


  $('#tweet-form').on("submit", function(event){
    event.preventDefault();
    
    const textArea = $(this).children("#tweet-text");
    const textAreaValue = $(this).children("#tweet-text").val();
    const errorDisplay =  $(this).children(".error-message");
    const errorMessage = $(this).children(".error-message").children("span");

    //basic tweet validations
    if(textAreaValue === ""){
      textArea.addClass('error');
      errorMessage.html("Tweet cannot be empty.")
      errorDisplay.slideDown()

      // return alert("Tweet cannot be empty!");
      return;
      
    }else if(textAreaValue.length > 140){
      textArea.addClass('error');
      errorMessage.html("Tweet cannot exceed 140 characters.")
      errorDisplay.slideDown()
      return;
    }

    const message = $(this).serialize();

    //post with simple success and failure confirmation
    $.post("/tweets", message)
    .done(()=>{
      textArea.removeClass("error")
      errorDisplay.slideUp()
      // textArea.val(""); //clears textarea
      console.log("tweeted message: ", message)
      loadTweets("last");
      // loadTweets();
    })
    .fail(()=>{
      console.log("tweet failed to send.")
    })
  })



  //message load all tweets in the database when the app runs
  loadTweets("all");
  
})


