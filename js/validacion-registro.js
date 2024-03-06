const urlCreateAccount = 'http://localhost:9090/usuarios';

function createAccount() {
    const fullName = document.getElementById('fullName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!isPasswordMatch(password, confirmPassword)) {
        showAlert('Las contraseñas no coinciden', 'danger');
        return;
    }

    if (!isValidFields(fullName, phoneNumber, email)) {
        showAlert('Por favor, completa todos los campos correctamente.', 'danger');
        return;
    }

    const userBody = {
        nombre: fullName,
        correo: email,
        celular: phoneNumber,
        contrasena: password,
        rol: 0
    };

    fetch(urlCreateAccount, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userBody)
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success: ', data);

            const userObject = {
                id: data.id,
                fullName: data.nombre,
                phoneNumber: data.celular,
                email: data.correo,
                isLoggedIn: false,
                role: data.rol
            };

            saveUserInLocalStorage(userObject);

            showAlert('Registro exitoso', 'success');

            Swal.fire({
                text: 'Serás redirigido a la página de inicio de sesión',
                icon: 'success',
                position: 'center',
                showConfirmButton: false,
                timer: 5000,
            });

            setTimeout(() => {
                window.location.href = '/pages/page-login.html';
            }, 3000);
        })
        .catch((error) => {
            console.log('Error: ', error);
            showAlert('Error al registrar el usuario', 'danger');

            Swal.fire({
                position: "center",
                icon: "error",
                title: "La cuenta no pudo ser creada, por favor intenta de nuevo.",
                showConfirmButton: false,
                timer: 1500,
                closeOnClickOutside: false,
              });
        });
}

function saveUserInLocalStorage(userObject) {
    let arrayUsers = [];
    arrayUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (arrayUsers.some(user => user.email === email)) {
        showAlert('El correo electrónico ya está registrado', 'danger');
        return;
    }

    arrayUsers.push(userObject);
    localStorage.setItem('users', JSON.stringify(arrayUsers));
}

function isPasswordMatch(password, confirmPassword) {
    return password === confirmPassword;
}

function isValidFields(fullName, phoneNumber, email) {
    return fullName.trim() !== '' && phoneNumber.match(/^\d{10}$/) && isValidEmail(email);
}

function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} mt-3`;
    alertDiv.innerText = message;

    const container = document.querySelector('.container');
    container.appendChild(alertDiv);

    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}
function validateEmail() {
    const email = document.getElementById('email').value;

    if (isValidEmail(email)) {
        showAlert('Correo electrónico válido', 'success');
    } else {
        showAlert('Correo electrónico no válido', 'danger');
    }
}

function isValidEmail(email) {
    // Utilizando una expresión regular para validar el formato del correo electrónico
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}



