
// Calculate the sum of all numbers from 1 up to n (including n).
// The total number of ops is constant(3) and does not depend on n
// takes constant time O(1)
function addUpTo(n) {
  // 3 operations(* + /)
  return n * (n + 1) / 2;
}

var time1 = performance.now();
addUpTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)