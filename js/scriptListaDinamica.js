let products = {
  data: [
    {
      productName: "Smart Watch SIM A1",
      category: "tecnología",
      price: "46,900" + " COLOR: NEGRO",
      image: "/assets/assets lista dinamica/Smart-Watch-SIM.jpg",
           
    },
    {
      productName: "Mini Teclado Inalámbrico",
      category: "tecnología",
      price: "19,200" + " COLOR: NEGRO, VERDE",
      image: "/assets/assets lista dinamica/mini-teclado.jpg",
           
    },
    {
      productName: "Consola Super Nintendo ",
      category: "tecnología",
      price: "100,000" + " RETRO HDMI SF900",
      image: "/assets/assets lista dinamica/consola-videojuegos.jpg",
           
    },
    {
      productName: "Controlador Electrónico",
      category: "tecnología",
      price: "15,600" + " PARA JUEGOS X8",
      image: "/assets/assets lista dinamica/controlador-electrico.jpg",
           
    },
    {
      productName: "DRONE 4K HD",
      category: "tecnología",
      price: "90,900" + " CUATRO EJES",
      image: "/assets/assets lista dinamica/dron.jpg",
           
    },
    {
      productName: "LUCES LED ",
      category: "tecnología",
      price: "46,900" + " KIT DE LUZ FLEXIBLE",
      image: "/assets/assets lista dinamica/luces-led.jpg",
           
    },
    {
      productName: "Depiladora Electrica",
      category: "mujeres",
      price: "70,000" + " APRUEBA DE AGUA",
      image: "/assets/assets lista dinamica/Depiladora.jpg",
    },
    {
      productName: "Mini Plancha De Pelo",
      category: "mujeres",
      price: "90,000" + " COLOR: PINK, BLACK",
      image: "/assets/assets lista dinamica/Mini-Plancha.jpg",
    },
    {
      productName: "Combo Onikuma (Teclado, Mouse, Diadema)",
      category: "mujeres",
      price: "130" + " COLOR: PINK, WHITE",
      image: "/assets/assets lista dinamica/como-onikuma.jpg",
    },
    {
      productName: "Termo Inteligente Digital",
      category: "mujeres",
      price: "50,000" + " COLOR: PINK, BLACK",
      image: "/assets/assets lista dinamica/termodigital.jpg",
    },
    {
      productName: "lIGE SMARTH WATCH WOMAN",
      category: "mujeres",
      price: "85,000" + " COLOR: PINK, BLACK, WHITE",
      image: "/assets/assets lista dinamica/relooj.jpg",
    },
    {
      productName: "Lámpara Para Uñas",
      category: "mujeres",
      price: "60,000" + " Temporizador Secador De Portátil USB",
      image: "/assets/assets lista dinamica/lamaparauñas.jpg",
    },
    {
      productName: "Consola De Mano 8GB",
      category: "hombres",
      price: "330,000 " + "PANTALLA HD DE 4.3 PULGADAS ",
      image: "/assets/assets lista dinamica/consola-mano.jpg",
    },
    
    {
      productName: "Afeitadora Eléctrica ",
      category: "hombres",
      price: "56,000 " + "3 EN 1 COLOR: BLACK, WHITE, GREY ",
      image: "/assets/assets lista dinamica/Afeitadora.jpg",
    },
    {
      productName: " Gaming Mouse ",
      category: "hombres",
      price: "70,000 " + " LED Backlight Ergonomics",
      image: "/assets/assets lista dinamica/gaming-Mouse.jpg",
    },
    {
      productName: "Auriculares Inalámbricos Business ",
      category: "hombres",
      price: "40,000 " + "COLOR: NEGRO, ROJO",
      image: "/assets/assets lista dinamica/audifonos-man.jpg",
    },
    {
      productName: "Go pro 4k 1080p HD",
      category: "hombres",
      price: "106,000 " + " Todo En Uno Impermeable",
      image: "/assets/assets lista dinamica/gp-pro.jpg",
    },
    {
      productName: "SILLA GAMER",
      category: "hombres",
      price: "230,000 ",
      image: "/assets/assets lista dinamica/silla-gamer.jpg",
    },
    {
      productName: "Vaporizador Facial",
      category: "belleza",
      price: "186,900"+ " COLOR: PINK, BLUE, BLACK",
      image: "/assets/assets lista dinamica/vaporizador-facial.jpg",
    },
    {
      productName: "Cepillo Electronico",
      category: "belleza",
      price: "86,900"+ " COLOR: PINK, BLUE, BLACK",
      image: "/assets/assets lista dinamica/bcepillo.jpg",
    },
    {
      productName: "Depilacion Laser",
      category: "belleza",
      price: "109,900" + " COLOR: NEGRO, BLANCO, ROSADO",
      image: "/assets/assets lista dinamica/bdepilacion.jpg",
    },
    {
      productName: "Mascarilla Facial LED",
      category: "belleza",
      price: "45,900" ,
      image: "/assets/assets lista dinamica/bmascarilla.jpg",
    },
    {
      productName: "SECADORA DE PELO",
      category: "belleza",
      price: "186,900"+ " COLOR: PINK, BLUE, BLACK",
      image: "/assets/assets lista dinamica/bsecadora.jpg",
    },
    {
      productName: "Masajeador Muscular",
      category: "belleza",
      price: "306,900"+ " COLOR: PINK, BLUE, BLACK",
      image: "/assets/assets lista dinamica/masajeador.jpg",
    },
    {
      productName: "Balon Inteligente XIAOMI",
      category: "deporte",
      price: "900,000"+" COLOR: WHITE, BLACK, BLUE",
      image: "/assets/assets lista dinamica/balon.jpg",
    },
    {
      productName: "Auriculares Inalámbricos",
      category: "deporte",
      price: "89,000"+" COLOR: PINK, WHITE, BLACK, BLUE",
      image: "/assets/assets lista dinamica/auriculares-bluetooth.jpg",
    },
    {
      productName: "Gafas Deportivas VR",
      category: "deporte",
      price: "209,000",
      image: "/assets/assets lista dinamica/gafas3d.jpg",
    },
    {
      productName: "Zapatillas Inteligentes Adidas",
      category: "deporte",
      price: "500,000",
      image: "/assets/assets lista dinamica/zapatillas.jpg",
    },
    {
      productName: "Masajeador  Muscular",
      category: "salud",
      price: "300,000" + " COLOR: BLACK, GREEN",
      image: "/assets/assets lista dinamica/masajeador.jpg",
    },
    {
      productName: "Sensor De Higrómetro Digital",
      category: "salud",
      price: "300,000" ,
      image: "/assets/assets lista dinamica/termometro.jpg",
    },
    {
      productName: "Monitor De Presión Arterial",
      category: "salud",
      price: "74,000" ,
      image: "/assets/assets lista dinamica/monitor.jpg",
    },
    {
      productName: "Masajeador De Pies Eléctrico",
      category: "salud",
      price: "39,000" ,
      image: "/assets/assets lista dinamica/masajeadorpies.jpg",
    },
    {
      productName: "Termómetro Infrarrojo ",
      category: "salud",
      price: "300,000" + " Medidor De Saturación De Dedos",
      image: "/assets/assets lista dinamica/termometrodigital.jpg",
    },
    
    {
      productName: "Proyector De Estrellas",
      category: "hogar",
      price: "189,000"+ " DIFUSOR DE OLORES",
      image: "/assets/assets lista dinamica/proyector-estrellas.jpg",
    },
    {
      productName: "Freidora De Aire",
      category: "hogar",
      price: "189,000",
      image: "/assets/assets lista dinamica/airflayer.jpg",
    },
    {
      productName: "Alexa Google Home",
      category: "hogar",
      price: "100,000",
      image: "/assets/assets lista dinamica/alexa.jpg",
    },
    {
      productName: "Difusor De Llama THREEFLAMES",
      category: "hogar",
      price: "189,000"+ " Led USB",
      image: "/assets/assets lista dinamica/difusor.jpg",
    },
    {
      productName: "Cortina Cadena De Luces",
      category: "hogar",
      price: "48,000"+ " DIFUSOR DE OLORES",
      image: "/assets/assets lista dinamica/ledhadas.jpg",
    },
    {
      productName: "Rosa Eterna 24K",
      category: "hogar",
      price: "33,000",
      image: "/assets/assets lista dinamica/rosaeterna.jpg",
    },
    {
      productName: "Mini Cámara Inalámbrica",
      category: "descuentos",
      price: "163,000"+ "  ANTES: $200,000",
      image: "/assets/assets lista dinamica/mini-camara.jpg",
    },
    {
      productName: "Fujifilm Instax Mini ",
      category: "descuentos",
      price: "656,000"+ " ANTES: $800,000",
      image: "/assets/assets lista dinamica/camarita.jpg",
    },
    {
      productName: "Gafas De Sol Compatibles Con Bluetooth ",
      category: "descuentos",
      price: "30,000"+ " ANTES: $70,000",
      image: "/assets/assets lista dinamica/gafassol.jpg",
    },
    
    
    

  ],
};

for (let i of products.data) {
  // Crear la tarjeta
  let card = document.createElement("div");
  // La tarjeta debe tener una clase de categoría y debe permanecer oculta inicialmente
  card.classList.add("card", i.category, "hide");

  // Contenedor de imagen
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  // Etiqueta de imagen
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  image.classList.add("imageLista");
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  // Contenedor
  let container = document.createElement("div");
  container.classList.add("container");

  // Nombre del producto
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  // Precio
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  // Botón "Añadir al carrito" con icono de carrito
  let addButton = document.createElement("button");
  addButton.innerHTML = '<i class="fas fa-shopping-cart"></i> Añadir al carrito';
  addButton.addEventListener("click", function() {
    // Función para manejar el evento de clic del botón
    addToCart(i.productId); // Aquí deberías pasar el ID del producto
  });
  container.appendChild(addButton);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

// Función para añadir productos al carrito
function addToCart(productId) {
  // Aquí puedes escribir la lógica para añadir el producto al carrito
  // Por ejemplo, puedes tener una lista de productos en el carrito y añadir el producto correspondiente a esa lista.
  console.log("Producto añadido al carrito:", productId);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "todo") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("buscar").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("buscar-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("todo");
};

// Function to render products
function renderizarProductos() {
  baseDeDatos.forEach((info) => {
    // Create the product card structure
    const miNodo = document.createElement("div");
    miNodo.classList.add("card", "col-sm-4");

    // Create the card body
    const miNodoCardBody = document.createElement("div");
    miNodoCardBody.classList.add("card-body");

    // Create the product title
    const miNodoTitle = document.createElement("h5");
    miNodoTitle.classList.add("card-title");
    miNodoTitle.textContent = info.nombre;

    // Create the product image
    const miNodoImagen = document.createElement("img");
    miNodoImagen.classList.add("img-fluid");
    miNodoImagen.setAttribute("src", info.imagen);

    // Create the product price
    const miNodoPrecio = document.createElement("p");
    miNodoPrecio.classList.add("card-text");
    miNodoPrecio.textContent = `${info.precio}${divisa}`;

    // Create the "Add to cart" button with an icon
    const miNodoBoton = document.createElement("button");
    miNodoBoton.classList.add("btn", "btn-primary");
    miNodoBoton.textContent = "Add to cart";

    const miNodoIcono = document.createElement("i");
    miNodoIcono.classList.add("fas", "fa-cart-plus");
    miNodoBoton.appendChild(miNodoIcono);

    // Add the click event listener to the button
    miNodoBoton.addEventListener("click", () => {
      anyadirProductoAlCarrito(info.id);
    });

    // Append elements to the card body
    miNodoCardBody.appendChild(miNodoImagen);
    miNodoCardBody.appendChild(miNodoTitle);
    miNodoCardBody.appendChild(miNodoPrecio);
    miNodoCardBody.appendChild(miNodoBoton);

    // Append the card body to the product node
    miNodo.appendChild(miNodoCardBody);

    // Append the product node to the DOM
    DOMitems.appendChild(miNodo);
  });
}

// ...

for (let i of products.data) {
  // Create Card
  let card = document.createElement("div");
  // Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");

  // image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  // img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  image.classList.add("imageLista");
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  // container
  let container = document.createElement("div");
  container.classList.add("container");

  // product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  // price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  // Add "Add to cart" button
  let addToCartButton = document.createElement("button");
  addToCartButton.innerText = "Agregar al carrito";
  addToCartButton.classList.add("add-to-cart-button");

  // Add click event listener to the "Add to cart" button
  addToCartButton.addEventListener("click", () => {
    // You can customize this function to add the product to the cart
    // For now, let's just log a message to the console
    console.log("Producto agregado al carrito:", i.productName);
  });

  container.appendChild(addToCartButton);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

// ...