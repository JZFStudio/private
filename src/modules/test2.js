let obj = {
  a: '1',
  b: '2'
}

setTimeout(() => {
  obj.a = 'aaa';
  obj.b = 'bbb';
  console.log('test2 timeout run');
}, 2000)

module.exports = obj;