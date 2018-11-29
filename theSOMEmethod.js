The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.

For example, the following code would check if any element in the numbers array is less than 10:

var numbers = [10, 50, 8, 220, 110, 11];
numbers.some(function(currentValue) {
  return currentValue < 10;
});
// Returns true

function checkPositive(arr) {
  // Add your code below this line
  
  return arr.some(x => x > 0)
  // Add your code above this line
}
checkPositive([1, 2, 3, -4, 5]);
