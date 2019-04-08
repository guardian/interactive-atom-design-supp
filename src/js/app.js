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
  ankle.innerHTML = '<div class="ds-ankle-inner"><div class="ds-onward-two"><a href="https://gu.com/p/b54nd"></a><img src="https://media.guim.co.uk/5b060136bf4a3921affce0682a4457e12f2a3b33/0_212_2560_1536/2000.jpg"><h1>Waste not. Want: the most innovative green products and their designers</h1><h3>From dyeing clothes with bacteria to a roof made from recycled flip-flops: these are the ideas and products paving the way for a more sustainable future</h3></div><div class="ds-onward-three"><a href="https://gu.com/p/b2xg5"></a><img src="https://media.guim.co.uk/c1095ef515d8e8c4324ecd8cbeaa517ac832e558/0_187_5604_3362/1000.jpg"><h1>The upside down: Lowline subterranean park in Manhattan</h1><h3>In two years’ time, the Lower East Side will be home to the world’s first underground ‘green’ space – the Lowline</h3></div></div>'
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
