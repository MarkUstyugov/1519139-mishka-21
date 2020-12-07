function initMap() {
  const myLatLng = { lat: 59.93869690209515, lng: 30.32303079329398 };
  const map = new google.maps.Map(document.querySelector(".contacts__map-wrapper"), {
    zoom: 17,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    icon: '../img/map-pin.svg'
  });
}
