class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say() {
    console.log('Person say.')
  }
}

let jack = new Person('Jack', 25);

jack.say();

console.log(jack.constructor === Person);
console.log(jack.__proto__ === Person.prototype);
console.log(jack.__proto__.constructor === Person);
console.log(jack.constructor === jack.__proto__.constructor);