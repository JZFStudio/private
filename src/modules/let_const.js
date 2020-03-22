{
  let a = 1;
  // console.log(1);
  var b = 2;
  // console.log(b);
}
// console.log(a);
// console.log(b);
//let 是在代码块内有效，var 是在全局范围内有效

let c = 3;
// let c = 4;
var d = 5;
var d = 6;
// console.log(c, d);
//let 只能声明一次 var 可以声明多次

for (var i = 0; i < 6; i++) {
  setTimeout(() => {
    // console.log(i);
  }, 0);
}
for (let j = 0; j < 6; j++) {
  setTimeout(() => {
    // console.log(j);
  }, 0);
}
//for循环里适合用let

// console.log(n);
var n = 7;
// console.log(m);
let m = 8;
// console.log(m);
//let 不存在变量提升，var 会变量提升

var PI = '3.14';
if (true) {
  // console.log(PI);
  let PI = '3.1415926';
}
//暂时性死区

const ary = [1,2,3,4,5];
ary.push(6);
// console.log(ary);

let freeze = {
  type: 'freeze',
  ary: [1, 2, 3, 4, 5, 6]
}

// Object.freeze(freeze);
Object.defineProperty(freeze, 'type', {
  writable: false
})
// Object.freeze(freeze.ary);

freeze.type = 'a';
freeze.ary.push(7);

console.log('freeze', freeze);