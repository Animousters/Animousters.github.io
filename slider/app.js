function resize() {
  let slider = document.getElementById("slider");
  let resizeImage = document.getElementById("resizeImage");
  let sliderButton = document.getElementById("sliderButton");
  resizeImage.style.width = `${slider.value / 10}%`;
  sliderButton.style.left = `${slider.value / 10}%`;
}
