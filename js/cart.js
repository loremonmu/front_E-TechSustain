const closeBtn = document.getElementById("close-btn");
const showCart = document.getElementById("id-container-cart");
const cartSection = document.getElementById("cart-section");
const totalCart = document.getElementById("total-cart");

document.addEventListener("DOMContentLoaded", function() {
  const cartBtns = document.querySelectorAll("#open-cart");

  cartBtns.forEach(function(cartBtn) {
    cartBtn.addEventListener("click", function() {
      showCart.classList.toggle("active");
      menuMobile.classList.remove('active');
    });
  });
});

// cartBtn.addEventListener("click", () => {
//   showCart.classList.toggle("active");
//   menuMobile.classList.remove('active');
// });
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

// const addToCart = (product) => {
//   const cart = getCart();
//   const newItem = {
//     image: product.image,
//     name: product.name,
//     description: product.description,
//     price: product.price,
//     quantity: 1,
//   };

//   cart.push(newItem);
//   updateCart(cart);
//   renderCart();
// };

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

// document.querySelectorAll(".btn-add-cart").forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     const product = JSON.parse(event.target.dataset.product);
//     addToCart(product);
//   });
// });

renderCart();
