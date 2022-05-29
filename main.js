
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;
  // console.log(delta);

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};





$(".navbar-toggler").click(function(){
  let result=$(".menu-icon").hasClass("fa-bars");
  console.log(result);
  if(result){
    $(".menu-icon").removeClass("fa-bars").addClass("fa-times");
    
  }
  else{
    $(".menu-icon").removeClass("fa-times").addClass("fa-bars");
  }
});




let screenHeight=$(window).height();
console.log(screenHeight);


$(window).scroll(function(){
  
  let currentHeight=$(this).scrollTop();
  console.log(currentHeight);
  
  if(screenHeight-100 > currentHeight && currentHeight > 97){
    setActive("home");
    $(".scroll-to-home").removeClass("d-none");
    $(".scroll-to-home").addClass("d-block");
    
  }
  else if(currentHeight == 0){
    $(".scroll-to-home").removeClass("d-block");
    $(".scroll-to-home").addClass("d-none");
  }
  

  
    
})
function setActive(current){
  $(".nav-link").removeClass("active");
  $(`.nav-link[href='#${current}']`).addClass("active");
}
function navScroll(){
  let currentPosition=$("section[id]");
  currentPosition.waypoint(
    function(direction){
      if(direction== 'down'){
        let currentId=$(this.element).attr("id");
        console.log(currentId);
        setActive(currentId);
        
      }
},
{
  offset: "10%",
});
currentPosition.waypoint(
  function(direction){
    if(direction== 'up'){
      let currentId=$(this.element).attr("id");
      console.log(currentId);
      setActive(currentId);
    }
},
{
offset: "10%",
});
}
navScroll();
$(window).on("load",function(){
  $(".loader-container").fadeOut(500,function(){
    this.remove();
  });
})

