//slider

let products = [
  {
    productName: "Combo Teclado con Mouse CMK-188.",
    category: "deporte",
    price: "50000",
    image: "/assets/e-tech-sustain-producto1.png",
  },
  {
    productName: "Zapatillas Inteligentes Adidas",
    category: "deporte",
    price: "500000",
    image: "/assets/assets lista dinamica/zapatillas.jpg",
  },
  {
    productName: "Masajeador  Muscular",
    category: "salud",
    price: "300000",
    image: "/assets/assets lista dinamica/masajeador.jpg",
  },
  {
    productName: "Sensor De Higrómetro Digital",
    category: "salud",
    price: "300000",
    image: "/assets/assets lista dinamica/termometro.jpg",
  },
  {
    productName: "Monitor De Presión Arterial",
    category: "salud",
    price: "74000",
    image: "/assets/assets lista dinamica/monitor.jpg",
  },
];

let containerSlider = document.getElementById('slider-container');

products.forEach((product) => {
  let card = document.createElement('article');
  card.className = 'card__article swiper-slide';
  card.innerHTML = `
    
    <div class="card__image">
      <img src="${product.image}" alt="image" class="card__img">
      <div class="card__shadow"></div>
    </div>

    <div class="card__data">
      <h3 class="card__name">${product.productName}</h3>
      <p class="card__description">
        ${product.price}
      </p>
      <a href="/pages/page-catalogo.html" class="card__button">
        <button class="add-to-cart-button">
          Conocer más <i class="fas fa-arrow-right"></i>
        </button>
      </a>
    </div>

  `;
  containerSlider.appendChild(card);
});