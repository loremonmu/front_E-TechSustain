
/* Código Navbar */
let iconMobile = document.querySelector('.icon-mobile');
    let menuMobile = document.querySelector('.menu-mobile');
    let iconClose = document.querySelector('.icon-close');

    iconMobile.addEventListener('click', function(){
      menuMobile.classList.toggle('active');
    })
    iconClose.addEventListener('click', function(){
      menuMobile.classList.toggle('active');
    })

/* Código Equipo / destacados */

function toggleEquipo() {
  var equipoContainer = document.getElementById('equipoContainer');
  equipoContainer.style.display = equipoContainer.style.display === 'none' ? 'flex' : 'none';
}

var currentIndex = 0;
var totalProductos = document.querySelectorAll('.producto-card').length;

function moverProductos(direccion) {
  var productosContainer = document.querySelector('.productos-destacados');
  currentIndex = (currentIndex + direccion + totalProductos) % totalProductos;
  var translateValue = -currentIndex * (100 / totalProductos) + '%';
  productosContainer.style.transform = 'translateX(' + translateValue + ')';
}