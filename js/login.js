function validateForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!isValidFields(email)) {
    showAlert("Por favor, completa todos los campos correctamente.", "danger");
    return;
  }

  const userObject = {
    email,
    password,
  };

  let arrayUsers = [];
  arrayUsers = JSON.parse(localStorage.getItem("users")) || [];

  const loggedInUser = arrayUsers.find(
    (user) => user.email === email && user.password === password
  );

  if (loggedInUser) {
    
    loggedInUser.isLoggedIn = true;
    localStorage.setItem("users", JSON.stringify(arrayUsers)); // Save updated arrayUsers

    Swal.fire({
      position: "center",
      icon: "success",
      title: `Bienvenid@ ${loggedInUser.fullName}, será redirigido a la página principal en 3 segundos`,
      showConfirmButton: false,
      timer: 1500,
      closeOnClickOutside: false,
    });

    setTimeout(() => {
      window.location.href = "../index.html";
    }, 1500);
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "El correo o contraseña son incorrectos",
      showConfirmButton: false,
      timer: 1500,
      closeOnClickOutside: false,
    });
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
