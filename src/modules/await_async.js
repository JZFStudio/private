//优点
//异步改同步更清晰，解决多then问题，回调地狱问题

//缺点
//异步改同步，当多调用没有关系时，性能降低

let a = 111;
let b = async () => {
  a += await 10;
  console.log('async', a);
}

b();
a++;
console.log('a', a);