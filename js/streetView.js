streetViewModulo = (function () {
  var panorama // 'Visor' de StreetView

   /*crea un panorama en una posición y lo muestra en la página. */
  function inicializar () {
    panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'), {
        position: posicionCentral,
        pov: {
          heading: 34,
          pitch: 10
        }
    });
      mapa.setStreetView(panorama);
  }

    // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
    panorama.position=ubicacion
    mapa.setStreetView(panorama);  
  }

  return {
    inicializar,
    fijarStreetView
  }
})()
