let getContainer = document.getElementById("historial-shopping-container");
let emptyFetch = document.getElementById("compras-vacio");


const users = JSON.parse(localStorage.getItem('users'));

const loggedInUserId = users.find(user => user.isLoggedIn === true);
console.log(loggedInUserId);
let id = 0;
let urlCarrito = "";

if (loggedInUserId !== undefined) {
  id = loggedInUserId.id;
  urlCarrito = `http://localhost:9090/carrito/usuario/${id}`;
} else {

  console.log('No se encontró un usuario logeado');
}

function fetchCarrito() {
  fetch(urlCarrito)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        emptyFetch.style.display = "block";
      }else{
        renderCarrito(data);
      }
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

function renderCarrito(data) {
  let html = "";
  let total = 0;
  let totalCantidad = 0;
  data.forEach((shop) => {
    total += shop.producto.precio;
    totalCantidad += shop.producto.cantidad;
    let precioFormateado = shop.producto.precio.toLocaleString('es-CO');

    html += `
      <div class="card-shop">
        <img src="${shop.producto.url_image}" class="card-img-top" alt="imagen del producto">
        <div class="card-body">
          <span class="card-title">${shop.producto.nombre}</span>
          <p class="card-text">X ${shop.producto.cantidad}</p>
          <p class="card-text">$ ${precioFormateado} COP</p>
          <p class="card-text">${shop.producto.descripcion}</p>
        </div>
      </div>
    `;
  }
  );
  getContainer.innerHTML = html;
  document.getElementById("cantidad").innerHTML = `Cantidad: ${totalCantidad}`;
  document.getElementById("total").innerHTML = `Total: $ ${total.toLocaleString('es-CO')} COP`;
}

window.onload = () => {
  fetchCarrito();
};