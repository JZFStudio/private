setTimeout(() => {
  console.log(1);
});
console.log(2);
process.nextTick(() => {
  console.log(3);
})
new Promise(function(res, rej) {
  console.log(4);
  res();
}).then(res => {
  console.log(5);
})
setImmediate(function() {
  console.log(6);
})

console.log('end');