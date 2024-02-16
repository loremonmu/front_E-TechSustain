const elementToShow = document.querySelectorAll(".user-logged");
const elementToHide = document.querySelectorAll(".logged-true");
const menuSize = document.querySelector(".list-menu");

const arrayUsers = JSON.parse(localStorage.getItem("users")) || [];

const loggedInUser = arrayUsers.find((user) => user.isLoggedIn === true);

if (loggedInUser) {
  //document.getElementById("user").innerText = loggedInUser.fullName;
  menuSize.style.width = "85%";
  elementToShow.forEach((element) => {
    element.style.display = "flex";
  });
  elementToHide.forEach((element) => {
    element.style.display = "none";
  });
} else {
  elementToShow.forEach((element) => {
    element.style.display = "none";
  });
  elementToHide.forEach((element) => {
    element.style.display = "flex";
  });
}

// if (islogged) {
//     const arrayUsers = JSON.parse(islogged);
//     const loggedInUser = arrayUsers.find(user => user.isLoggedIn === true);
//     if (loggedInUser) {
//         document.getElementById('user').innerText = loggedInUser.fullName;
//     }
// } else {
//     window.location.href = 'login.html';
// };

function logout() {
    const arrayUsers = JSON.parse(localStorage.getItem('users')) || [];
    const logOutUser = arrayUsers.find(user => user.isLoggedIn === true);
    //console.log(logOutUser);
    logOutUser.isLoggedIn = false;
    localStorage.setItem('users', JSON.stringify(arrayUsers));

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Cerrando sesión',
        showConfirmButton: false,
        timer: 1500,
        closeOnClickOutside: false
    });

    setTimeout(() => {
      window.location.href = "page-login.html";
    }, 1500);
}


function changeRole(){
  const arrayUsers = JSON.parse(localStorage.getItem('users')) || [];
  const logOutUser = arrayUsers.find(user => user.isLoggedIn === true);
  logOutUser.role = 1;
  localStorage.setItem('users', JSON.stringify(arrayUsers));
}