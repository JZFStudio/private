let sy = Symbol('sy');
// console.log(sy);
// console.log(typeof sy);

let sy1 = Symbol('sy');

// console.log(sy === sy1);

let obj = {};
obj[sy] = 1;
obj[sy1] = 2;

//由于每一个 Symbol 的值都是不相等的，所以 Symbol 作为对象的属性名，可以保证属性不重名
//Symbol 作为对象属性名时不能用.运算符，要用方括号。因为.运算符后面是字符串，所以取到的是字符串 sy 属性，而不是 Symbol 值 sy 属性
//Symbol 值作为属性名时，该属性是公有属性不是私有属性，可以在类的外部访问。但是不会出现在 for...in 、 for...of 的循环中，也不会被 Object.keys() 、 Object.getOwnPropertyNames() 返回。如果要读取到一个对象的 Symbol 属性，可以通过 Object.getOwnPropertySymbols() 和 Reflect.ownKeys() 取到

let s1 = Symbol('s1');
let s2 = Symbol.for('s1');
console.log(Symbol.keyFor(s2));
console.log(s1 === s2);
let s3 = Symbol.for('s1');
console.log(Symbol.keyFor(s3));
console.log(s2 === s3);
console.log(s1 === s3);