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
  setInterval(changeBackground, 2000);
});
