document.addEventListener('DOMContentLoaded', () => {
  let loginForm = document.getElementById('loginForm');
  let emailInput = document.getElementById('email');
  let passwordInput = document.getElementById('password');
  let emailError = document.getElementById('emailError');
  let passwordError = document.getElementById('passwordError');
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();
    if (email === '') {
      emailError.textContent = 'Email không được bỏ trống';
    } else {
      emailError.textContent = '';
    }
    if (password === '') {
      passwordError.textContent = 'Mật khẩu không được bỏ trống';
    } else {
      passwordError.textContent = '';
    }
    let registeredUsers = JSON.parse(localStorage.getItem('users')) || {};
    if (email !== '' && password !== '') {
      if (registeredUsers[email] && registeredUsers[email] === password) {
        window.location.href = 'home.html';
      } else {
        emailError.textContent = 'Email hoặc mật khẩu không đúng';
        passwordError.textContent = 'Email hoặc mật khẩu không đúng';
      }
    }
  });
});