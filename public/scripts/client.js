/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  const timeFromNow = (num) => {

    const seconds = Math.floor((new Date() - num) / 1000);
  
    const years = seconds / 31536000;
  
    if(years > 1){
      return Math.floor(years) + " years ago";
    }
  
    const months = seconds / 2592000;
  
    if(months > 1){
      return Math.floor(months) + " months ago";
    }
  
    const weeks = seconds / 604800;
  
    if(weeks > 1){
      return Math.floor(weeks) + " weeks ago";
    }
  
    const days = seconds / 86400;
  
    if(days > 1){
      return Math.floor(days) + " days ago";
    }
  
    const hours = seconds / 3600;
  
    if(hours > 1){
      return Math.floor(hours) + " hours ago";
    }
  
    const minutes = seconds / 60;
  
    if(minutes > 1){
      return Math.floor(minutes) + " minutes ago";
    }
  
    return Math.floor(seconds) + " seconds ago";
  
  
  }



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
        <span>${timeFromNow(data.created_at)}</span>
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
  
})


