//The every method works with arrays to check if every element passes a particular test. It returns a Boolean value - 
//true if all values meet the criteria, false if not.

function checkPositive(arr) {
  // Add your code below this line
  return arr.every((x) => x > 0);
  
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);