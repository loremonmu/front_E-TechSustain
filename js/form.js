const formulario = document.getElementById('contact-form');
const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');

//console.log(inputs);

const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]+(?:\s[a-zA-ZÀ-ÿ\s]+)*(?:\s\d{1,2})?$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{7,14}$/,
  message: /^[a-zA-Z0-9\s.,?!¡¿()-]{1,1000}$/
};

const campos = {
  name: false,
  email: false,
  phone: false,
  message: false
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "name":
      validarCampo(expresiones.name, e.target, 'name');
      break;
    case "email":
      validarCampo(expresiones.email, e.target, 'email');
      break;
    case "phone":
      validarCampo(expresiones.phone, e.target, 'phone');
      break;
    case "message":
      validarCampo(expresiones.message, e.target, 'message');
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document.getElementById(`field-${campo}`).classList.remove('field-form-wrong');
    document.getElementById(`field-${campo}`).classList.add('field-form-correct');
    document.querySelector(`#field-${campo} i`).classList.add('fa-check-circle');
    document.querySelector(`#field-${campo} i`).classList.remove('fa-times-circle');
    document.querySelector(`#field-${campo} .form-input-error`).classList.remove('form-input-error-active');
    campos[campo] = true;
  } else {
    document.getElementById(`field-${campo}`).classList.add('field-form-wrong');
    document.getElementById(`field-${campo}`).classList.remove('field-form-correct');
    document.querySelector(`#field-${campo} i`).classList.add('fa-times-circle');
    document.querySelector(`#field-${campo} i`).classList.remove('fa-check-circle');
    document.querySelector(`#field-${campo} .form-input-error`).classList.add('form-input-error-active');
    campos[campo] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  if (campos.name && campos.email && campos.phone && campos.message) {

    emailjs.init('6Y6Zzk4wdHm33LgFN');
    const serviceID = 'service_93ayrh8';
    const templateID = 'template_1u133p8';
    const templateParams = {
      name: inputs[0].value,
      email: inputs[1].value,
      phone: inputs[2].value,
      message: inputs[3].value,
    };

    emailjs.send(serviceID, templateID, templateParams)
      .then(function (response) {
        document.getElementById('form-message-success').classList.add('form-message-success-active');
        setTimeout(() => {
          document.getElementById('form-message-success').classList.remove('form-message-success-active');
        }, 5000);
      }, function (error) {
        console.error('Error al enviar el correo:', error);
      });

    formulario.reset();

    document.querySelectorAll('.field-form-correct').forEach((icono) => {
      icono.classList.remove('field-form-correct');
    });



  } else {
    document.getElementById('form-message').classList.add('form-message-active');
  }
});