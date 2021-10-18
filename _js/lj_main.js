const navButton = document.querySelector(`.topnav-button`);
const listDisplay = document.querySelector(`.menu-blur`);
const listDisplayClose = document.querySelector(`.mdiv`);
const secondListDisplayClose = document.querySelector(`.menu-blur`);
const bodyDontScroll = document.querySelector(`body`);
const video = document.querySelector(`iframe`);
const prod1 = document.getElementById(`prod-1`);
const prod2 = document.getElementById(`prod-2`);
const prod3 = document.getElementById(`prod-3`);
const overlay1 = document.getElementById(`overlay1`);
const overlay2 = document.getElementById(`overlay2`);
const overlay3 = document.getElementById(`overlay3`);

navButton.addEventListener(`click`, function () {
  listDisplay.classList.add(`menu-unblur`);
  bodyDontScroll.style.overflow = `hidden`;
  video.style.display = `none`;
});

listDisplayClose.addEventListener(`click`, function () {
  listDisplay.classList.remove(`menu-unblur`);
  bodyDontScroll.style.removeProperty(`overflow`);
  video.style.display = `inline-block`;
});

secondListDisplayClose.addEventListener(`click`, function () {
  listDisplay.classList.remove(`menu-unblur`);
  bodyDontScroll.style.removeProperty(`overflow`);
  video.style.display = `inline-block`;
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    listDisplay.classList.remove(`menu-unblur`);
    bodyDontScroll.style.removeProperty(`overflow`);
    video.style.display = `inline-block`;
  }
});
// prod1.addEventListener(`click`, function () {
//   if (overlay1.style.height === "99%") {
//     overlay1.style.height = "0%";
//   } else overlay1.style.height = `99%`;
// });
// prod2.addEventListener(`click`, function () {
//   if (overlay2.style.height === "99%") {
//     overlay2.style.height = "0%";
//   } else overlay2.style.height = `99%`;
// });
// prod3.addEventListener(`click`, function () {
//   if (overlay3.style.height === "99%") {
//     overlay3.style.height = "0%";
//   } else overlay3.style.height = `99%`;
// });

$("#productspage").on("click", ".prod-button", function(e){
  if($(this).closest(".prod-col").find(".overlay").is(".hide")){
    $(this).closest(".prod-col").find(".overlay").removeClass("hide");
    $(this).closest(".prod-col").find(".overlay").addClass("show");
  } else {
    $(this).closest(".prod-col").find(".overlay").removeClass("show");
    $(this).closest(".prod-col").find(".overlay").addClass("hide");
  }
})

// product page
const sliderImg = document.querySelector('.sliderImg');

let image_buttons = document.querySelectorAll('.img_button img');
// console.log(image_buttons);
for(img_btn of image_buttons){
  img_btn.addEventListener("click", function(e){
    // console.log(this);
    // console.log(this.src);
    // console.log(this.getAttribute("blah"));
    // console.log(e);

    sliderImg.setAttribute('src', this.getAttribute("src"));
    // sliderImg.setAttribute('src', this.src);
    // sliderImg.src = this.src;
  });
}

$(document).on("scroll", function(e){
  // console.log();
  // $("#carouselExampleSlidesOnly").css({"margin-top": $(window).scrollTop()+"px"});
  
});

const details = document.querySelector(`#borderleft`);
const description = document.querySelector(`#dszzcription`);
const productDesc = document.querySelector(`.prodcutdesc`);
const productSpec = document.querySelector(`.productspec`);
details.style.backgroundColor = '#9e9e9e';

details.addEventListener(`click`, ()=>{
  productSpec.style.display = 'block';
  details.style.backgroundColor = '#9e9e9e';
  description.style.backgroundColor = '';
  description.style.opacity = '';
  productDesc.style.display = 'none';
});

description.addEventListener(`click`, ()=>{
  productDesc.style.display = 'block';
  description.style.backgroundColor = '#9e9e9e';
  details.style.backgroundColor = '';
  details.style.opacity = '';
  productSpec.style.display = 'none';
});

const catalogslider = document.querySelector(`.catalog1`);

const tl = new TimelineMax(); 

tl.fromTo(catalogslider, 2, {opacity: 0, y: 50}, {opacity: 1, y:0}, "-=0.5");
