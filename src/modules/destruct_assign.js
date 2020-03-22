let [a, b, c] = [1, 2, 3];
console.log(a, b);

let [d, e] = [{a: 1, b: 2}, [1, 2, 3]];
console.log(d, e);

let [{f, g}] = [{f: 1, g: 2}];
console.log(f, g);

let ary = [1, 2, 3, 4, 5];

let res = ary.reduce(function (total, cur, cur_index, ary) {
  console.log(total, cur);
  console.log(cur_index, ary);
  // return total + cur;
  return 1;
}, 100);

console.log('res', res);

let obj = {
  a: 1,
  b: 2
}

console.log(Object.getOwnPropertyNames(obj));