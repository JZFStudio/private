function checkLogin() {
  let cookie = getCookie();
  return (cookie.username && cookie.password);
}

function getCookie() {
  let cookie = document.cookie;
  let list = cookie.split('; '), cookieBody = {};
  list.forEach(item => {
    let item_list = item.split('=');
    cookieBody[item_list[0]] = decodeURIComponent(item_list[1]);
  });
  return cookieBody;
}

function setCookie(key, val, time) {
  let now = new Date();
  now.setTime(now.getTime() + time * 1000);
  document.cookie = (key + '=' + val + '; expires=' + now.toGMTString());
}

export default {
  checkLogin,
  getCookie,
  setCookie
}