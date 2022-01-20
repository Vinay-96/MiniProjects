const imageSlide = document.querySelector(".image-slide");
const slidingImages = document.querySelectorAll(".image-slide img");

// buttons
const prevBtn = document.querySelector("#btnPrev");
const nextBtn = document.querySelector("#btnNxt");

// Counter
let counter = 1;
const size = slidingImages[0].clientWidth;

imageSlide.style.transform = `translateX(` + -size * counter + `px)`;

// Button listeners

nextBtn.addEventListener("click", function () {
  if (counter >= slidingImages.length - 1) return;
  imageSlide.style.transition = "transform 1s ease-in-out";
  counter++;
  // console.log(counter)
  imageSlide.style.transform = `translateX(` + -size * counter + `px)`;
});

prevBtn.addEventListener("click", function () {
  if (counter <= 0) return;
  imageSlide.style.transition = "transform 1s ease-in-out";
  counter--;
  // console.log(counter)
  imageSlide.style.transform = `translateX(` + -size * counter + `px)`;
});

imageSlide.addEventListener("transitioned", function () {
  if (slidingImages[counter].id === "lastClone") {
    imageSlide.style.transition = "none";
    counter = slidingImages.length - 2;
    imageSlide.style.transform = `translateX(` + -size * counter + `px)`;
  }
  if (slidingImages[counter].id === "firstClone") {
    imageSlide.style.transition = "none";
    counter = slidingImages.length - counter;
    imageSlide.style.transform = `translateX(` + -size * counter + `px)`;
  }
});
