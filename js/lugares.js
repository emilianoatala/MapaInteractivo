lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

    // Completa las direcciones ingresadas por el usuario a y establece los límites
    // con un círculo cuyo radio es de 20000 metros.
  function autocompletar() {
    let circulo = new google.maps.Circle({
         center: posicionCentral, map: mapa,  radius: 20000, visible: false,
        })
    let autocompletadorDireccion = new google.maps.places.Autocomplete(document.getElementById("direccion"));
    let autocompletadorDesde = new google.maps.places.Autocomplete(document.getElementById("desde"));
    let autocompletadorHasta = new google.maps.places.Autocomplete(document.getElementById("hasta"));
    let autocompletadorAgregar = new google.maps.places.Autocomplete(document.getElementById("agregar"));
    autocompletadorDireccion.setBounds(circulo.getBounds())
    autocompletadorDesde.setBounds(circulo.getBounds())
    autocompletadorHasta.setBounds(circulo.getBounds())
    autocompletadorAgregar.setBounds(circulo.getBounds())      
  }
    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar()
  }
    // Busca lugares con el tipo especificado en el campo de TipoDeLugar
  function buscarCerca (posicion) { 
    let radio = document.getElementById("radio").value;
    let tipoDeLugar = document.getElementById("tipoDeLugar").value
    servicioLugares.nearbySearch({location: posicion, radius:radio, type: tipoDeLugar}, function(results, status){
      marcadorModulo.marcarLugares(results, status)
    })      
  }
  return {
    inicializar,
    buscarCerca
  }
})()
