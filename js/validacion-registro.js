function validateForm() {
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

    const userObject = {
        fullName,
        phoneNumber,
        email,
        password,
    };

    showAlert('Registro exitoso', 'success');
    console.log(userObject);
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



