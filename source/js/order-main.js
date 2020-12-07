let whiteMask = document.querySelector('.white-mask');
let orderButton = document.querySelector('.special-product__button');
let modalCart = document.querySelector('.modal-cart');

orderButton.addEventListener('click', function(evt){
  evt.preventDefault();
  whiteMask.classList.add('white-mask--active');
  modalCart.classList.add('modal-cart--active');
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
