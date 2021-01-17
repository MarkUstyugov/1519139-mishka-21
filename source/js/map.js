var staticMap = document.querySelector(".contacts__map-image");
staticMap.classList.add("contacts__map-image--hide");

ymaps.ready(function () {
  var myMap = new ymaps.Map("map", {
    center: [59.938635, 30.323118],
    zoom: 17
  }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
      hintContent: "Мишка - товары ручной работы для дома",
      balloonContent: "г. Санкт-Петербург ул. Большая Конюшенная д. 19/8, офис 101"
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: "default#image",
      // Своё изображение иконки метки.
      iconImageHref: "img/map-pin.svg",
      // Размеры метки.
      iconImageSize: [67, 100],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-30, -100]
    });

  myMap.geoObjects
    .add(myPlacemark)
});
