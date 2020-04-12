setImmediate(() => {
  console.log('1');
})

let p = new Promise((res, rej) => {
  console.log('2');
  res();
}).then((result) => {
  console.log('3');
}).catch((err) => {
  console.log('4');
});

setTimeout(() => {
  console.log('5');
}, 0);

console.log('6');