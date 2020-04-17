function Person(name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log('Hi, I am is ' + this.name);
  }
}

Person.prototype.sleep = function () {
  console.log(this.name + ' is sleeping.');
}

//原型链继承

// 特点
// 非常纯粹的继承关系，实例是子类的实例，也是父类的实例
// 父类新增原型方法/原型属性，子类都能访问到
// 简单，易于实现

//缺点
// 要想为子类新增属性和方法，必须要在new Animal()这样的语句之后执行，可以在子类构造函数中新增属性和方法
// 无法实现多继承
// 来自原型对象的所有属性被所有实例共享（来自原型对象的引用属性是所有实例共享的）
// 创建子类实例时，无法向父类构造函数传参
function Man1(hairColor, beardColor) {
  this.hairColor = hairColor;
  this.beardColor = beardColor;
  this.getHairColor = function () {
    console.log('The color is ' + this.hairColor);
  }
}
Man1.prototype = new Person();
Man1.prototype.type = 'man';

//构造继承

// 特点
// 解决了1中，子类实例共享父类引用属性的问题
// 创建子类实例时，可以向父类传递参数
// 可以实现多继承（call多个父类对象）

// 缺点
// 实例并不是父类的实例，只是子类的实例
// 只能继承父类的实例属性和方法，不能继承原型属性/方法
// 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能

function Man2(name, age, hairColor, beardColor) {
  Person.call(this, name, age);
  this.hairColor = hairColor;
  this.beardColor = beardColor;
  this.getHairColor = function () {
    console.log('The color is ' + this.hairColor);
  }
}

//实例继承

// 特点
// 不限制调用方式，不管是new 子类()还是子类(),返回的对象具有相同的效果

// 缺点
// 实例是父类的实例，不是子类的实例
// 不支持多继承
function Man3(name, age, color) {
  let ins = new Person(name, age);
  ins.color = color;
  ins.getColor = function () {
    console.log('color is ' + this.color);
  }
  return ins;
}

//拷贝继承

// 特点
// 支持多继承

// 缺点
// 效率较低，内存占用高（因为要拷贝父类的属性）
// 无法获取父类不可枚举的方法（不可枚举方法，不能使用for in 访问到）

function Man4(name, age, color) {
  let person = new Person(name, age);
  for (let p in person) {
    Man4.prototype[p] = person[p];
  }
  Man4.prototype.color = color;
}

//组合继承

// 特点
// 弥补了方式2的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法
// 既是子类的实例，也是父类的实例
// 不存在引用属性共享问题
// 可传参
// 函数可复用

// 缺点
// 调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）

function Man5(name, age, color) {
  Person.call(this, name, age);
  this.color = color;
}

Man5.prototype = new Person();

Man5.prototype.constructor = Man5;

//寄生组合继承

// 特点
// 堪称完美

// 缺点
// 实现复杂

function Man6(name, age, color) {
  Person.call(this, name, age);
  this.color = color;
}

(function() {
  let Super = function () {};
  Super.prototype = Person.prototype;
  Man6.prototype = new Super();
  Man6.prototype.constructor = Man6;
})()

let jack = new Man6('Jack', 20, 'red');
console.log(Man6.prototype.constructor);