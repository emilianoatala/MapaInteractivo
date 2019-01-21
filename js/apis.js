let mapa;
let posicionCentral = {lat:-31.416858, lng:-64.183631};

// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {
    mapa = new google.maps.Map(document.getElementById("map"),{
    zoom:8, 
    center:posicionCentral}); 

  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}
