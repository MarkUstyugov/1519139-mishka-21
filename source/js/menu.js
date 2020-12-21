var menuButton = document.querySelector('.page-header__menu-toggle');
var mainNavigation = document.querySelector('.main-navigation');
var search = document.querySelector('.search');
var userNavigation = document.querySelector('.user-navigation');

menuButton.classList.add("page-header__menu-toggle--show");
menuButton.classList.add('page-header__menu-toggle--closed');
mainNavigation.classList.add("main-navigation--active");
search.classList.toggle('search--active');
userNavigation.classList.toggle('user-navigation--active');

menuButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  mainNavigation.classList.toggle('main-navigation--active');
  search.classList.toggle('search--active');
  userNavigation.classList.toggle('user-navigation--active');
  menuButton.classList.toggle('page-header__menu-toggle--closed');
});
