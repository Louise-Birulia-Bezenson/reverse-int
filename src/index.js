module.exports = function reverse (n) {
  const newN = Math.abs(n);
  let result = 0;

  result = Number(String(newN).split('').reverse().join(''));
  return  result;
}
