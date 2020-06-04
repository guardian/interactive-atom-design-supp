var navigation = document.querySelector('.ds-navigation');
var header = document.querySelector('.ds-header');
var headerRight = document.querySelector('.ds-header-right');
var innerNav = document.querySelector('.ds-navigation-display');
var footer = document.querySelector('.l-footer');

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    (top + 200) >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height - 200) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}

function insertLinks(footer){
  var childNode = document.querySelector('.footer__primary');
  var ankle = document.createElement('div');
  ankle.classList.add('ds-ankle');
  ankle.innerHTML = '<div class="ds-ankle-inner"><div class="ds-onward-two"><a href="https://gu.com/p/b54nc"></a><img src="https://media.guim.co.uk/273e7de287f9e6ee4501b430834be9a581e6a673/0_2158_4127_2476/2000.jpg"><h1>Four legs good</h1><h3>Why shouldn’t dogs enjoy minimalist furniture in natural shades?</h3></div><div class="ds-onward-three"><a href="https://gu.com/p/b2xg5"></a><img src="https://media.guim.co.uk/586dba2fb597c8bbda00d092349f95e1af813e0d/0_725_7360_4416/2000.jpg"><h1>Yinka Iloris colourful world</h1><h3>The British Nigerian designer on thinking big, bright and positive</h3></div></div>'
  footer.insertBefore(ankle, childNode);
}

function hoverNav(nav, innerNav){
  nav.addEventListener('mouseover', function(){
    console.log('mouseover');
    this.classList.add('mouseover');
    innerNav.classList.add('mouseover');
  });
  nav.addEventListener('mouseout', function(){
    console.log('mouseover');
    this.classList.remove('mouseover');
    innerNav.classList.remove('mouseover');
  });
}

function scroll(header){
  document.addEventListener('scroll', function(){
    console.log(header);
    var headerposition = header.getBoundingClientRect();
    var windowHeight = window.innerHeight;
    var percentage = (headerposition.bottom / windowHeight) * 100;
    var opacity = (percentage / 100);
    headerRight.style.opacity = opacity;

    var images = document.querySelectorAll('.element-image');

    for(var i=0; i < images.length; i++){
      if(elementInViewport(images[i])) {
        images[i].classList.add('inView');
      }else {
        images[i].classList.remove('inView');
      }
    }
  },header);
}

function init(){
  hoverNav(navigation, innerNav);
  scroll(header);
  insertLinks(footer);
};

init();
