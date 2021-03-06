var whiteMask = document.querySelector(".white-mask");
var orderButton = document.querySelector(".special-product__button");
var modalCart = document.querySelector(".modal-cart");


orderButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  whiteMask.classList.add("white-mask--active");
  modalCart.classList.add("modal-cart--active");
});

document.addEventListener("click", function (evt) {
  var target = evt.target;
  if (!target.closest(".special-product__button")) {
    if (!target.closest(".modal-cart")) {
      modalCart.classList.remove("modal-cart--active");
      whiteMask.classList.remove("white-mask--active");
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalCart.classList.contains("modal-cart--active")) {
      evt.preventDefault();
      modalCart.classList.remove("modal-cart--active");
      whiteMask.classList.remove("white-mask--active");
    }
  }
});
