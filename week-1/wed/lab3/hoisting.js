const cube = function (x) {
  return x * x * x;
};

const fullName = function (first, last) {
  return first + " " + last;
};

const power = function (base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);  
};                                      

const sumCubes = function (numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
};

//PART - 3 

// 1
let values = [10, 20, 30];

for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}


// 2

let lastLogin = '1/1/1970';

function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};


console.log(welcome('Charlie', 'Munger'));
