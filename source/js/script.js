let menuButton = document.querySelector('.page-header__menu-toggle');
let mainNavigation = document.querySelector('.main-navigation');
let search = document.querySelector('.search');
let userNavigation = document.querySelector('.user-navigation');

menuButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  mainNavigation.classList.toggle('main-navigation--closed');
  search.classList.toggle('search--closed');
  userNavigation.classList.toggle('user-navigation--closed');
  menuButton.classList.toggle('page-header__menu-toggle--closed');
})
