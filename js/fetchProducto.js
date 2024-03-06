
let fetchContainer = document.getElementById("products");
const urlProductos = "http://localhost:9090/productos";
let currentPage = 1;
const pageSize = 6;
let allProducts = []; // Lista completa de todos los productos
let displayedProducts = []; // Lista de productos que se muestran actualmente

function fetchProductos() {
  fetch(urlProductos)
    .then((response) => response.json())
    .then((data) => {
      allProducts = data;
      updateDisplayedProducts(allProducts);
      filterProduct("todo");
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

function renderProductos(products) {
  let html = "";

  products.forEach((producto) => {
    const categoria = producto.categoria.nombre.toLowerCase();
    const precio = producto.precio;
    const precioFormateado = precio.toLocaleString('es-CO');

    html += `
      <div class="card ${categoria}">
        <div class="image-container">
          <img src="${producto.url_image}" class="imageLista" alt="imagen del producto">
        </div>
        <div class="container">
          <h5 class="product-name">${producto.nombre}</h5>
          <h6>$ ${precioFormateado} COP</h6>
          <button class="add-to-cart-button"> <i class="fas fa-shopping-cart"></i>Añadir al carrito</button>
        </div>
      </div>
    `;
  });

  fetchContainer.innerHTML = html;

  const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
  addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productName = e.target.parentElement.querySelector(".product-name").innerText;
      console.log(productName);
      const product = allProducts.find(product => product.nombre === productName);
      console.log(product);
      addToCart(product);
    });
  });

  if (products.length < allProducts.length) {
    document.getElementById("load-more-button").style.display = "block";
  } else {
    document.getElementById("load-more-button").style.display = "none";
  }
}

function updateDisplayedProducts(products) {
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  displayedProducts = products.slice(0, end);
  renderProductos(displayedProducts);
  //ttachAddToCartListeners();
}

function loadMore() {
  currentPage++;
  updateDisplayedProducts(allProducts);
}

function filterProduct(value) {

  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  if (value == "todo") {
    // Si se selecciona "todo", mostrar todos los productos
    displayedProducts = allProducts;
  } else {
    // Filtrar los productos por categoría
    displayedProducts = allProducts.filter(producto => {
      const categoria = producto.categoria.nombre.toLowerCase();
      return categoria === value;
    });
  }

  currentPage = 1; // Reiniciar la página al aplicar un filtro
  updateDisplayedProducts(displayedProducts);
}

const addToCart = (product) => {
  const cart = getCart();
  console.log(JSON.stringify(product));
  console.log(cart , cart.findIndex);
  const existingItemIndex = cart.findIndex(item => item.productName === product.nombre);
  console.log(existingItemIndex);

  if (existingItemIndex !== -1) {
    // Si el producto ya está en el carrito, aumenta la cantidad en 1
    cart[existingItemIndex].quantity += 1;

    Swal.fire({
      position: "top-end",
      icon: "info",
      title: "Se agregó una unidad al carrito",
      showConfirmButton: false,
      timer: 1500
    });
  } else {
    // Si el producto no está en el carrito, agrégalo con cantidad 1
    const newItem = {
      image: product.url_image,
      productName: product.nombre,
      category: product.categoria.nombre,
      price: product.precio,
      quantity: 1,
    };
    cart.push(newItem);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "El producto se añadió correctamente al carrito",
      showConfirmButton: false,
      timer: 1500
    });
  }

  // Actualiza el carrito en el almacenamiento local y renderiza el carrito
  updateCart(cart);
  renderCart();
};


window.onload = () => {
  fetchProductos();
};

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  var scrollToTopButton = document.getElementById("scroll-to-top");
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
