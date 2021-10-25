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

$("#productspage").on("click", ".prod-button", function (e) {
  if ($(this).closest(".prod-col").find(".overlay").is(".hide")) {
    $(this).closest(".prod-col").find(".overlay").removeClass("hide");
    $(this).closest(".prod-col").find(".overlay").addClass("show");
  } else {
    $(this).closest(".prod-col").find(".overlay").removeClass("show");
    $(this).closest(".prod-col").find(".overlay").addClass("hide");
  }
});

// product page
const sliderImg = document.querySelector("#sliderMain1");
let image_buttons = document.querySelectorAll(".img_button img");
for (img_btn of image_buttons) {
  img_btn.addEventListener("click", function (e) {
    sliderImg.setAttribute("src", this.getAttribute("src"));
  });
}

const sliderImg2 = document.querySelector("#sliderMain2");
let image_buttons2 = document.querySelectorAll(".img_button2 img");
for (img_btn of image_buttons2) {
  img_btn.addEventListener("click", function (e) {
    sliderImg2.setAttribute("src", this.getAttribute("src"));
  });
}

const sliderImg3 = document.querySelector("#sliderMain3");
let image_buttons3 = document.querySelectorAll(".img_button3 img");
for (img_btn of image_buttons3) {
  img_btn.addEventListener("click", function (e) {
    sliderImg3.setAttribute("src", this.getAttribute("src"));
  });
}

const sliderImg4 = document.querySelector("#sliderMain4");
let image_buttons4 = document.querySelectorAll(".img_button4 img");
for (img_btn of image_buttons4) {
  img_btn.addEventListener("click", function (e) {
    sliderImg4.setAttribute("src", this.getAttribute("src"));
  });
}

// $(document).on("scroll", function (e) {
//   $("#carouselExampleSlidesOnly").css({
//     "margin-top": $(window).scrollTop() + "px",
//   });
// });

//First button
const details1 = document.querySelector(`#borderleft1`);
const description1 = document.querySelector(`#dszzcription1`);

const productDesc1 = document.querySelector(`#productdesc1`);
const productSpec1 = document.querySelector(`#productspec1`);
details1.style.backgroundColor = "#9e9e9e";

details1.addEventListener(`click`, () => {
  productSpec1.style.display = "block";
  details1.style.backgroundColor = "#9e9e9e";
  description1.style.backgroundColor = "";
  description1.style.opacity = "";
  productDesc1.style.display = "none";
});

description1.addEventListener(`click`, () => {
  productDesc1.style.display = "block";
  description1.style.backgroundColor = "#9e9e9e";
  details1.style.backgroundColor = "";
  details1.style.opacity = "";
  productSpec1.style.display = "none";
});

//Second Button
const details2 = document.querySelector(`#borderleft2`);
const description2 = document.querySelector(`#dszzcription2`);

const productDesc2 = document.querySelector(`#productdesc2`);
const productSpec2 = document.querySelector(`#productspec2`);
details2.style.backgroundColor = "#9e9e9e";

details2.addEventListener(`click`, () => {
  productSpec2.style.display = "block";
  details2.style.backgroundColor = "#9e9e9e";
  description2.style.backgroundColor = "";
  description2.style.opacity = "";
  productDesc2.style.display = "none";
});

description2.addEventListener(`click`, () => {
  productDesc2.style.display = "block";
  description2.style.backgroundColor = "#9e9e9e";
  details2.style.backgroundColor = "";
  details2.style.opacity = "";
  productSpec2.style.display = "none";
});

//Third
const details3 = document.querySelector(`#borderleft3`);
const description3 = document.querySelector(`#dszzcription3`);

const productDesc3 = document.querySelector(`#productdesc3`);
const productSpec3 = document.querySelector(`#productspec3`);
details3.style.backgroundColor = "#9e9e9e";

details3.addEventListener(`click`, () => {
  productSpec3.style.display = "block";
  details3.style.backgroundColor = "#9e9e9e";
  description3.style.backgroundColor = "";
  description3.style.opacity = "";
  productDesc3.style.display = "none";
});

description3.addEventListener(`click`, () => {
  productDesc3.style.display = "block";
  description3.style.backgroundColor = "#9e9e9e";
  details3.style.backgroundColor = "";
  details3.style.opacity = "";
  productSpec3.style.display = "none";
});

//Fourth
const details4 = document.querySelector(`#borderleft4`);
const description4 = document.querySelector(`#dszzcription4`);

const productDesc4 = document.querySelector(`#productdesc4`);
const productSpec4 = document.querySelector(`#productspec4`);

details4.style.backgroundColor = "#9e9e9e";

details4.addEventListener(`click`, () => {
  productSpec4.style.display = "block";
  details4.style.backgroundColor = "#9e9e9e";
  description4.style.backgroundColor = "";
  description4.style.opacity = "";
  productDesc4.style.display = "none";
});

description4.addEventListener(`click`, () => {
  productDesc4.style.display = "block";
  description4.style.backgroundColor = "#9e9e9e";
  details4.style.backgroundColor = "";
  details4.style.opacity = "";
  productSpec4.style.display = "none";
});
  

// const catalogslider = document.querySelector(`.catalog1`);

// const tl = new TimelineMax();

// tl.fromTo(catalogslider, 2, {opacity: 0, y: 50}, {opacity: 1, y:0}, "-=0.5");