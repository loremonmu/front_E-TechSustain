
/* Código Navbar */
let iconMobile = document.querySelector('.icon-mobile');
let menuMobile = document.querySelector('.menu-mobile');
let iconClose = document.querySelector('.icon-close');

iconMobile.addEventListener('click', function () {
  menuMobile.classList.toggle('active');
})
iconClose.addEventListener('click', function () {
  menuMobile.classList.toggle('active');
})

document.addEventListener("DOMContentLoaded", function() {
  var currentUrl = window.location.pathname;
  var menuLinks = document.querySelectorAll(".list-menu a");

  menuLinks.forEach(function(link) {
    if (link.getAttribute("href") === currentUrl) {
      link.classList.add("activo");
    }
  });
});


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
