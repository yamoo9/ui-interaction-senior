import { setCookie, getCookie, deleteCookie } from './scripts/cookie.js';
import { delay } from './scripts/delay.js';

delay(1200).then(() => {
  setCookie('uid', 'duicosk-x2!', { 'max-age': 3600 * 24 });
});

delay(1500).then(() => {
  setCookie('uname', '야무', { 'max-age': 3600 * 12 });
});

delay(2000).then(() => {
  console.log(getCookie('uname'), getCookie('uid'));
});

delay(2500).then(() => {
  deleteCookie('uname');
  deleteCookie('uid');
});
