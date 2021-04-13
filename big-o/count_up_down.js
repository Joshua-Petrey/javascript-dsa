// Bof O = O(n) linear, for loops are not nested
function countUpDown(n) {
  console.log("Going up")
  // first loop = O(n)
  for (let i = 0; i <= n; i++) {
    console.log(i)
  }
  console.log("At the top")
  // second loop = O(n)
  for (let j = n - 1; j >= 0; j--) {
    console.log(j)
  }
  console.log("At the bottom")
}

countUpDown(10);