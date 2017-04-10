'use strict'

var menu;
var topBar;
var topBarLeft;
var mem = '';
function pad(num, char) {
  char = char || '0'
  if (num < 10) {
    return char + num;
  }
  return num;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function formatDate(date) {
  var weekdays = [
    'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun',
  ];

  var wd = date.getDay();
  var dom = pad(date.getDate());
  var month = pad(date.getMonth());
  var hour = pad(date.getHours());
  var min = pad(date.getMinutes());
  var sec = pad(date.getSeconds());


  return weekdays[wd] + ' ' + month + '/' + dom + ' ' + hour + ':' + min + ':' + sec;
}

function updateTopBar() {
  var date = formatDate(new Date());

  var fps = 'FPS:' + getRandomInt(30, 32)
  var cpu = 'CPU' + pad(getRandomInt(0, 9), ' ') + ' 1'

  topBarLeft.textContent = date + ' ' + fps + ' ' + mem + ' ' + cpu
}

mem = 'Mem:'
for (var i = 0; i < 5; i++) {
  mem += pad(getRandomInt(0, 255).toString(16)).toUpperCase()
}


menu = document.createElement('a')
menu.href = '/'
menu.className = 'js-menu'
menu.textContent = 'menu'

topBar = document.createElement('div')
topBar.className = 'js-topbar'
topBarLeft = topBar.appendChild(document.createElement('span'))
topBarLeft.className = 'js-topbar-left'

var marquee = document.createElement('div')
marquee.className = 'js-marquee'
var marqueeInner = marquee.appendChild(document.createElement('span'))
marqueeInner.className = 'js-marquee-inner'

document.body.appendChild(menu)
document.body.appendChild(marquee)
document.body.insertBefore(topBar, document.body.children[0])
updateTopBar()

window.setInterval(window.requestAnimationFrame, 500, updateTopBar)
