function promiseAll(list) {
  return new Promise((resolve, reject) => {
    let results = list.map(item => ''), count = 0;
    list.forEach((item, index) => {
      item.then((res) => {
        result(res, index);
      }).catch((err) => {
        reject(err);
      });
    });
    function result(res, index) {
      results[index] = res;
      if (++count === results.length) {
        resolve(results);
      }
    }
  })
}

let p1 = new Promise((res, rej) => {
  setTimeout(() => {
    rej('p1 err');
    console.log(1);
    res('1');
  }, 1000);
}),
p2 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log(2);
    res('2');
  }, 500);
}),
p3 = new Promise((res, rej) => {
  setTimeout(() => {
    console.log(3);
    res('3');
  }, 2000);
});

let list = [p1, p2, p3];

promiseAll(list).then((result) => {
  console.log('all res', result);
}).catch((err) => {
  console.log('all err', err);
});

function f1() {
  let p1 = new Promise((res, rej) => {
    setTimeout(() => {
      console.log('p1 rej');
      rej('p1 err');
    }, 1000);
  })
  
  let p2 = new Promise((res, rej) => {
    setTimeout(() => {
      console.log('p2 res');
      res(p1);
    }, 500);
  })
  
  p2.then(res => {
    console.log('res', res);
  }).catch(err => {
    console.log('err', err);
  })
}