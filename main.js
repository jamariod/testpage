window.onload = function () {
  this.setTimeout(logo, 1000);
  this.setTimeout(menu1, 1000);
  this.setTimeout(menu2, 1000);
};

function logo() {
  var h = document.querySelector('#logo h1');
  h.style.opacity = '1';
}
function menu1() {
  var l = document.querySelectorAll('#menu li');
  var i;
  for (i = 0; i < l.length; i++) {
    l[i].style.opacity = '1';
    l[i].style.transform = 'translate(0)';
  }
}

function menu2() {
  var l = document.querySelectorAll('#menu2 li');
  var i;
  for (i = 0; i < l.length; i++) {
    l[i].style.opacity = '1';
    l[i].style.transform = 'translate(0)';
  }
}
function media() {
  var l = document.querySelectorAll('#me li');
  var i;
  for (i = 0; i < l.length; i++) {
    l[i].style.opacity = '1';
    l[i].style.transform = 'translate(0)';
  }
}
