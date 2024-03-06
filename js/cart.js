const closeBtn = document.getElementById("close-btn");
const showCart = document.getElementById("id-container-cart");
const cartSection = document.getElementById("cart-section");
const totalCart = document.getElementById("total-cart");

document.addEventListener("DOMContentLoaded", function() {
  const cartBtns = document.querySelectorAll("#open-cart");
  const btnComprar = document.getElementById("btn-comprar");
  console.log(cartBtns);
  console.log(btnComprar);

  
  cartBtns.forEach(function(cartBtn) {
    cartBtn.addEventListener("click", function() {
      showCart.classList.toggle("active");
      menuMobile.classList.remove('active');
    });
  });
  
  btnComprar.addEventListener("click", function() {
    sendCarrito();
  });
});

closeBtn.addEventListener("click", () => {
  showCart.classList.remove("active");
});

const getCart = () => {
  return JSON.parse(localStorage.getItem("carrito")) || [];
};

const updateCart = (cart) => {
  localStorage.setItem("carrito", JSON.stringify(cart));
};

const renderCart = () => {
  const cart = getCart();
  cartSection.innerHTML = "";

  if (cart.length === 0) {
    cartSection.innerHTML = "<p>El carrito está vacío</p>";
    return;
  }

  cart.forEach((item, index) => {
    const cartItemDiv = document.createElement("div");
    cartItemDiv.classList.add("carrito__item");

    cartItemDiv.innerHTML = `
          <div class="cart-item">
            <img src="${item.image}" alt="">
            <div class="cart-item-info">
              <span class="title-item">${item.productName}</span>
              <p class"descr-item">${item.category}</p>
              <p class"price-item">Precio: $${item.price * item.quantity}</p>
            </div>
            <div class="cart-item-actions">
              <div>
                <button class="btn-rest" data-index="${index}">-</button>
                <input type="number" min="1" max="100" value="${item.quantity}">
                <button class="btn-sum" data-index="${index}">+</button>
              </div>
              <button class="btn-delete" data-index="${index}">   Eliminar <i class="fa fa-trash"></i></button>
            </div>
          </div>
        `;

    cartSection.appendChild(cartItemDiv);

  });
  const total =
    cart && cart.length > 0
      ? cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
      : 0;

  totalCart.innerHTML = "$ " + total;
};

cartSection.addEventListener("click", (event) => {
  const cart = getCart();
  //console.log(event.target);
  //console.log(cart);
  const index = event.target.dataset.index;

  if (event.target.classList.contains("btn-sum")) {
    cart[index].quantity++;
  } else if (
    event.target.classList.contains("btn-rest") &&
    cart[index].quantity > 1
  ) {
    cart[index].quantity--;
  } else if (event.target.classList.contains("btn-delete") || event.target.classList.contains("btn-rest") && cart[index].quantity == 1) {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará el producto del carrito",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminarlo",
      cancelButtonText: "Cancelar",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        cart.splice(index, 1);
        updateCart(cart);
        renderCart(); 
        swalWithBootstrapButtons.fire({
          title: "Producto eliminado",
          text: "El producto ha sido eliminado del carrito",
          icon: "success",
          confirmButtonText: "Aceptar"
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire({
          title: "Cancelado",
          text: "El producto no ha sido eliminado del carrito",
          icon: "error",
          confirmButtonText: "Aceptar"
        });
      }
    });
    
  }

  updateCart(cart);
  renderCart();
});

renderCart();

const urlSendCarrito = "http://localhost:9090/carrito/create/list";

function sendCarrito() {
  const cart = getCart();
  const user = JSON.parse(localStorage.getItem("users")).find((user) => user.isLoggedIn === true);
  console.log(user.id);
  console.log(JSON.stringify(cart));
  const userId = user.id;
  const carrito = cart.map((item) => {
    return {
      usuario: {
        id: userId
      },
      producto: {
        id_producto: item.id
      },
      cantidad: item.quantity,
      precio_total: item.price * item.quantity
    };
  });

  console.log(carrito);

  fetch(urlSendCarrito, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(carrito),
  })
    .then((response) => {
      if (response.ok) {
        return response.text(); // Si la respuesta es exitosa, obtenemos el texto
      } else {
        throw new Error('Error en la solicitud');
      }
    })
    .then((data) => {
      if (data === "Carrito creado") {
        console.log(data);
        localStorage.removeItem("carrito");
        renderCart();
      } else {
        console.log(data);
      }
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
  
}