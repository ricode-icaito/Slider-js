window.addEventListener('load', function () {
  console.log('El contenido ha cargado!.');

  var imagenes = [];
  
  imagenes[0] = 'img/imagen-1.png';
  imagenes[1] = 'img/imagen-2.png';
  imagenes[2] = 'img/imagen-3.png';
  imagenes[3] = 'img/imagen-4.png';
  imagenes[4] = 'img/imagen-5.png';
  imagenes[5] = 'img/imagen-6.png';
  imagenes[6] = 'img/imagen-7.png';
  imagenes[7] = 'img/imagen-8.png';
  imagenes[8] = 'img/imagen-9.png';
  imagenes[9] = 'img/imagen-10.png';
  imagenes[10] = 'img/imagen-11.png';
  imagenes[11] = 'img/imagen-12.png';
  imagenes[12] = 'img/imagen-13.png';

  var indiceImagenes = 0;

  var tiempo = 2000;
  
  function cambiarImagenes() {
    
    document.slider.src = imagenes[indiceImagenes];

    if (indiceImagenes < 12) {
      indiceImagenes++;
    }else {
      indiceImagenes = 0
    }
  }

  setInterval(cambiarImagenes, tiempo);
  
});