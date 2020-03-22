let obj = {};
console.log(obj === {});
console.log(obj == {});

console.log(obj == '[object Object]');

let map = new Map([['a', 1], ['b', 2]]);
console.log(map, map.size);
let obj1 = {
  a: 1,
  b: 2
}
console.log(obj1, obj1.size);
console.log(Object.keys(obj1).length);

map.set(obj, 'obj');
map.set(obj, 'obj obj');

console.log(map);

for (let key of map) {
  console.log('for', key);
}

map.forEach((item, index) => {
  console.log(item + ':::' + index);
})

// 一个 Object 的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值
// Map 中的键值是有序的（FIFO 原则），而添加到对象中的键则不是。
// Map 的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算。
// Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突

/* function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.name = 'Person';

// let jack = new Person('Jack', 22);
let jack = new Person();
console.log(jack.name);
jack.name = 'Tom';
console.log(jack.name, jack.__proto__.name); */

//通过for of遍历，forEach等数组方法遍历

//Map.keys()  Map.values()

let set = new Set();

set.add(0);
set.add(NaN);
set.add(NaN);

console.log(set);