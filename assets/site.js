(function(){
  "use strict";
  var y=document.getElementById('yr'); if(y) y.textContent=new Date().getFullYear();
  var burger=document.getElementById('burger'), menu=document.getElementById('mobileMenu');
  if(burger&&menu){
    burger.addEventListener('click',function(){var o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o?'true':'false');});
    menu.addEventListener('click',function(e){if(e.target.closest('a')){menu.classList.remove('open');burger.setAttribute('aria-expanded','false');}});
  }
  var reduce=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  var els=document.querySelectorAll('[data-reveal]');
  if(reduce){els.forEach(function(el){el.classList.add('in');});}
  else if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:.08});
    els.forEach(function(el,i){el.style.transitionDelay=Math.min(i%3*70,160)+'ms';io.observe(el);});
  } else {els.forEach(function(el){el.classList.add('in');});}
})();
