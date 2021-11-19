function makeImageResponsive(element) {
  element.className += "img-fluid";
}

document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll("figure img");
  if (images) {
    images.forEach(makeImageResponsive);
  }
});
