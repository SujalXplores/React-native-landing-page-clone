document.addEventListener('DOMContentLoaded', () => {
  const classes = ['full', 'mobile', 'desktop', 'laptop', 'mobile2', 'full2'];
  let classIndex = -1;
  function changeBackground() {
    let main = document.querySelector('.lottie-animation');
    if (classIndex >= 0) {
      main.classList.remove(classes[classIndex]);
    }
    classIndex = (classIndex + 1) % classes.length;
    main.classList.add(classes[classIndex]);
  }
  changeBackground();
  setInterval(changeBackground, 3000);

  // window.onscroll = function () {
  //   console.log(window.pageYOffset);
  //   if (window.pageYOffset > 486) {
  //      TODO: Select image 1by1 and increase/decrease left and opacity of image on scroll
  //   }
  // };
});
