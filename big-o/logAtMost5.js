function logAtMost5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i)
  }
}
logAtMost5(100);
// O(1) constant time, as n grows runtime does not, anything below 5 is constant and is ignored; Anything above 5 is 5 and is also contant time