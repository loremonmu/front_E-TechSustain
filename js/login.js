const urlLogin = "http://localhost:9090/usuarios/verify";

function verifyUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!isValidFields(email)) {
    showAlert("Por favor, completa todos los campos correctamente.", "danger");
    return;
  }

  const userBody = {
    correo: email,
    contrasena: password,
  };

  console.log(JSON.stringify(userBody));

  fetch(urlLogin, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userBody),
  })
    .then((response) => {
      if (response.ok) {
        return response.text(); // Si la respuesta es exitosa, obtenemos el texto
      } else {
        throw new Error('Error en la solicitud');
      }
    })
    .then((data) => {
      if (data === "Usuario verificado") {
        // Si la respuesta es "Usuario verificado", entonces el inicio de sesión es exitoso
        const userObject = {
          email: email,
          isLoggedIn: true
        };
        verifyUserInLocalStorage(userObject);
  
        showAlert("Inicio de sesión exitoso", "success");
  
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Bienvenid@ ${email}, será redirigido a la página principal en 3 segundos`,
          showConfirmButton: false,
          timer: 1500
        });
  
        setTimeout(() => {
          window.location.href = "../index.html";
        }, 1500);
      } else {
        // Si la respuesta no es "Usuario verificado", entonces el inicio de sesión falló
        showAlert("El correo o contraseña son incorrectos", "danger");
  
        Swal.fire({
          position: "center",
          icon: "error",
          title: "El correo o contraseña son incorrectos",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      showAlert("Ha ocurrido un error en la solicitud", "danger");
    });
}

function verifyUserInLocalStorage(userObject) {
  let arrayUsers = [];
  arrayUsers = JSON.parse(localStorage.getItem("users")) || [];
  
  const userExists = arrayUsers.find((user) => user.email === userObject.email);

  if (userExists) {
    userExists.isLoggedIn = true;
    localStorage.setItem("users", JSON.stringify(arrayUsers));
  }
}

function isValidFields(email) {
  return isValidEmail(email);
}

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

function showAlert(message, type) {
  const alertDiv = document.createElement("div");
  alertDiv.className = `alert alert-${type} mt-3`;
  alertDiv.innerText = message;

  const container = document.querySelector(".container");
  container.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.remove();
  }, 3000);
}
function validateEmail() {
  const email = document.getElementById("email").value;

  if (isValidEmail(email)) {
    showAlert("Correo electrónico válido", "success");
  } else {
    showAlert("Correo electrónico no válido", "danger");
  }
}

function isValidEmail(email) {
  // Utilizando una expresión regular para validar el formato del correo electrónico
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}
