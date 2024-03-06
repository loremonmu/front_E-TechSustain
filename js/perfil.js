/* Código de Perfil */

//get item the local storage where isLogged is true
let loggedUser = JSON.parse(localStorage.getItem('users')).find(user => user.isLoggedIn === true);

if (loggedUser) {
  document.getElementById('user-name').innerText = loggedUser.fullName;
  document.getElementById('user-email').innerText = loggedUser.email;
  document.getElementById('user-phone').innerText = loggedUser.phoneNumber;

}