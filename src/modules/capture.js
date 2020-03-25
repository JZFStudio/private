//事件从外向内依次触发是捕获，然后从内向外再次触发是冒泡

//addEventListener有三个参数 事件名 回调函数 是否捕获

function click(e) {
  var e = e.target || e.srcElement;

  //阻止冒泡
  //w3c
  e.stopPropagation();
  //IE
  e.cancelBubble = true;

  //阻止默认事件
  //w3c
  e.preventDefault();
  //IE
  e.returnValue = false;
}