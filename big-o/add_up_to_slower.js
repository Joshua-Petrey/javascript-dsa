
// Calculate the sum of all numbers from 1 up to n (including n).
// The total number of ops depends on n
// scales linearly O(n)
function addUpTo(n) {
  // 1 assignment
  let total = 0;
  // i = 1 is an assignment op,
  // i<=n is a 1 comparison op per n
  // i++ === i += 1 two more simple ops per n.  
  for (let i = 1; i <= n; i++) {
    // Because were in a loop the number of + and = operations that are performed is === to n
    // so n additions + n assignments per loop
    total += i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)