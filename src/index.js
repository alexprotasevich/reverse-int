module.exports = function reverse (n) {
    let number = Math.abs(String(n));
    let string = String(number);
  return Number(string.split('').reverse().join(''));
}
