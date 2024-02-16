// formulario vender inicio

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//fin formlario

//seccion de formulario productos
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('product-form');

  cargarDatosFormulario();

  // Evento para manejar el envío del formulario
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Verificar los datos del formulario
    const errorMessage = verificarDatosFormulario();

    if (errorMessage) {
      alert(errorMessage);
    } else {
      // Recoger los datos del formulario
      const datosFormulario = {
        productName: document.getElementById('product-name').value,
        subcategory: document.getElementById('subcategory').value,
        price: document.getElementById('price').value,
        // la información de la imagen no deja almacenar en localStorage
      };

      // Almacenar los datos en localStorage
      localStorage.setItem('datosFormulario', JSON.stringify(datosFormulario));
      form.reset();
    }
  });
});

function cargarDatosFormulario() {
  const datosGuardados = JSON.parse(localStorage.getItem('datosFormulario'));
  if (datosGuardados) {
    document.getElementById('product-name').value = datosGuardados.productName || '';
    document.getElementById('subcategory').value = datosGuardados.subcategory || '';
    document.getElementById('price').value = datosGuardados.price || '';
  }
}
// Datos de las alertas
function verificarDatosFormulario() {
  const productName = document.getElementById('product-name').value.trim();
  const price = document.getElementById('price').value;
  const subcategory = document.getElementById('subcategory').value;

  if (productName === '') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'El campo "Nombre del Producto" no puede estar vacío.'
    });
    return false;
  }
  if (price <= 0 || isNaN(price)) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'El campo "Precio sostenible" no es un valor correcto.'
    });
    return false;
  }
  if (subcategory === '') {
    Swal.fire({
      icon: 'warning',
      title: 'Advertencia',
      text: 'Debes seleccionar una opción en el campo "Subcategoría".'
    });
    return false;
  }

  // Si todos los campos son válidos, muestra una alerta de éxito
  Swal.fire({
    icon: 'success',
    title: '¡Enviado!',
    text: 'El formulario se ha enviado con éxito.',
    confirmButtonText: 'Ok'
  }).then((result) => {
    if (result.isConfirmed) {
    }
  });
}