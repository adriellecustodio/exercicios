'use script';
window.addEventListener('load', start());

function start() {
  doSpread();
  superSum();
}
function doSpread() {
  const v1 = [1, 2];
  const v2 = [3, 7, 8];
  const v = [...v1, ...v2];
  console.log(v);
}
function superSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(superSum(1, 2, 3));
