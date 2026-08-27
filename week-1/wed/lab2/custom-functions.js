function cube(x) {
    return x*x*x;
}

function fullName(first, last) {
  return first + " " + last;
}

function power(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

function sumCubes(numbers) {
  var total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}

module.exports = {
  cube,
  fullName,
  power,
  sumCubes,
};