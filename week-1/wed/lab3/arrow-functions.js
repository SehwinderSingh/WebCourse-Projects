function sayHello() {
  return "Hello, world!";
}
const sayHelloArrow = () => "Hello, world!";

function double(x) {
  return x * 2;
}
const doubleArrow = x => x * 2;



function add(x, y) {
  return x + y;
}
const addArrow = (x, y) => x + y;


const person = {
  name: "Alice",
  sayHi: function () {
    return "Hi, " + this.name + "!";
  }
};

const personArrow = {
  name: "Alice",
  sayHi: () => "Hi, " + this.name + "!"   
};

console.log(person.sayHi());       
console.log(personArrow.sayHi());  


const personShorthand = {
  name: "Alice",
  sayHi() {
    return "Hi, " + this.name + "!";
  }
};


const numbers = [1, 2, 3, 4, 5];

const doubledRegular = [];
numbers.forEach(function (num) {
  doubledRegular.push(num * 2);
});

const doubledArrow = [];
numbers.forEach(num => doubledArrow.push(num * 2));   

const doubledMap = numbers.map(num => num * 2);       
console.log(doubledArrow, doubledMap);               