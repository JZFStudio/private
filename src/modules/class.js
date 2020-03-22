//es5和es6的类概念

  //es5
  function Person5(name, age) {
    this.name = name;
    this.age = age;
  }

  Person5.prototype.say = function () {
    console.log(this.name + '正在说话！');
  }

  var jack = new Person5('Jack', 25);

  console.log(jack.name);
  jack.say();

  //es6
  class Person6{
    constructor(name, age) {
      console.log('Person构造器启动');
      return new Person5(name, age);
    }
    say() {
      console.log(this.name + '正在说话！');
    }
  }

  Person6.prototype.sleep = function () {
    console.log(this.name + '正在睡觉！');
  }

  Object.assign(Person6.prototype, {
    getName: function () {
      console.log(this.name);
    },
    getAge: function () {
      console.log(this.age);
    }
  })

  var lucy = new Person6('Lucy', 22);

  for (let key in lucy) {
    console.log('key: ' + key);
    console.log(lucy.hasOwnProperty(key))
  }

  console.log(lucy.name);
  // lucy.say();
  // lucy.sleep();
  // lucy.getAge();
  // lucy.getName();
  console.log('1', lucy.__proto__ === Person6.prototype);
  console.log('1', lucy.__proto__ === Person5.prototype);

  lucy.__proto__.run = function () {
    console.log(this.name + '正在奔跑');
  }

  let lily = new Person6('Lily', 21);

  lily.run();

//参考：https://www.jianshu.com/p/86267fab4878

console.log('**********************');

//派生类

class Man extends Person5 {
  constructor(sex) {
    super('Man', '00');
    this.sex = sex;
  }

  getSex() {
    super.say();
    console.log('这个人的性别为：' + this.sex);
  }
}

var Jack = new Man('man');

Jack.say();
Jack.getSex();
console.log(Jack.name, Jack.age);