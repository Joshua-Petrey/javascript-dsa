// prints all possible pairs up to and including n
// (n * n) = 0(n^2), Quadratic time
// if n = 1 then 4 pairs. if n = 3 then 16 pairs
function printAllPairs(n) {
  for (var i = 0; i <= n; i++) {
    for (var j = 0; j <= n; j++) {
      console.log(i, j);
    }
  }
}

printAllPairs(3);