var globalTitle = "   Winter Is   Coming  2  ";

// Add your code below this line
function urlSlug(title) {
  
  return title.toLowerCase().trim().split(/\s+/).filter((x) => x !== "").join("-");
  //filter should always be in between split and join
  
  //return title.toLowerCase().trim().split(/\s+/).join('-');

}
// Add your code above this line
var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing)
