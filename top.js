//  hamburger js
function hamburger() {
    document.getElementById('top').classList.toggle('line_1');
    document.getElementById('center').classList.toggle('line_2');
    document.getElementById('bottom').classList.toggle('line_3');
    document.getElementById('nav').classList.toggle('in');
}
document.getElementById('hamburger').addEventListener('click' , function() {
    hamburger();
});


document.addEventListener("DOMContentLoaded", function() {
    var rotate = function(logo, angle) {
      logo.style.transform = "rotate(" + angle + "deg)";
    };
  
    window.addEventListener("scroll", function() {
      rotate(document.querySelector(".wheel"), window.pageYOffset * 0.3);
    });
});


window.addEventListener('scroll', function() {
    var line = document.getElementById('line');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var lineHeight = Math.min(scrollTop, window.innerHeight);
    var lineTop = scrollTop;
    line.style.height = lineHeight / 2 + 'px';
    line.style.top = lineTop + 'px';
});
