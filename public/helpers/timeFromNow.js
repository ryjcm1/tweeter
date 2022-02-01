
const timeFromNow = (num) => {

  const seconds = Math.floor((new Date() - date) / 1000);

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


export default timeFromNow;