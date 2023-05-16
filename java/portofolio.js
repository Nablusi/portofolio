// bar 
let item = document.querySelector(".navbar");
window.onscroll =function(){
  if(scrollY > 200){
    item.classList.add("active");
  } else{
    item.classList.remove("active");
  }
};



// ##########################################################################
// circle progressBar 
$(document).ready(function(){
    $(".circle").circleProgress({
        startAngle:-Math.PI / 2, 
        fill:"#0575E6"
    }).on("circle-animation-progress", function(event,progress,stepValue){
        $(this).find("span").html(Math.round(stepValue * 100) + "%");
    });
});


// #######################################################################
// works
// let one =document.querySelector(".btn-one");
// let two =document.querySelector(".btn-two");
// let three =document.querySelector(".btn-three");
// let four =document.querySelector(".btn-four");
// let five =document.querySelector(".btn-five");
// let six =document.querySelector(".btn-six");
let link =document.querySelector(".links").children;
let img =document.querySelectorAll(".img-button>button");

console.log(img);
link[0].onclick =function(){
    img[0].classList.add("active");
    img[1].classList.add("active");
    img[2].classList.add("active");
    img[3].classList.add("active");
    img[4].classList.add("active");
    img[5].classList.add("active");
    link[0].classList.add("active");
    link[3].classList.remove("active");
    link[1].classList.remove("active");
    link[2].classList.remove("active");
};
link[1].onclick =function(){
    img[0].classList.add("active");
    img[1].classList.remove("active");
    img[2].classList.remove("active");
    img[3].classList.add("active");
    img[4].classList.remove("active");
    img[5].classList.remove("active");
    link[1].classList.add("active");
    link[0].classList.remove("active");
    link[2].classList.remove("active");
    link[3].classList.remove("active");
};
link[2].onclick =function(){
    img[0].classList.remove("active");
    img[1].classList.remove("active");
    img[2].classList.add("active");
    img[3].classList.add("active");
    img[4].classList.remove("active");
    img[5].classList.remove("active");
    link[2].classList.add("active");
    link[0].classList.remove("active");
    link[1].classList.remove("active");
    link[3].classList.remove("active");
};
link[3].onclick =function(){
    img[0].classList.remove("active");
    img[1].classList.add("active");
    img[2].classList.remove("active");
    img[3].classList.remove("active");
    img[4].classList.remove("active");
    img[5].classList.add("active");
    link[3].classList.add("active");
    link[0].classList.remove("active");
    link[1].classList.remove("active");
    link[2].classList.remove("active");
};









// ###################################################################
// validation email
(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();