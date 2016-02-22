/**
 * Created by Igor on 21.02.2016.
 */
var link = document.querySelector(".map-contact-btn");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
});
close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
});
