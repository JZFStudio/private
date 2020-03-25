let a = 100;
let fn = function*() {
  let a = 1, b = 100;
  yield console.log(a + b);
  a += 10;
  yield console.log(a + b);
}

let gen = fn();
gen.next();
gen.next();