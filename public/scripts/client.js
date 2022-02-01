/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  const createTweetElement  = function(data){
    const tweet = $(`<article class="tweet">
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
      <p>${data.content.text}</p>
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
    
    </article>`)
  
    return tweet;
  
  }

  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  }
  
  const $tweet = createTweetElement(tweetData);
  
  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.



  $('#tweet-form').on("submit", function(event){
    event.preventDefault();
    console.log("submitted: ", $(this).serialize())
  })
  
})


