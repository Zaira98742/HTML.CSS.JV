let passwordInput = document.getElementById('passwordInput');
let showPassword = document.getElementById('showPassword');
let hidePassword = document.getElementById('hidePassword');
showPassword.addEventListener('click', function() {
  passwordInput.type = 'text';
  showPassword.style.display = 'none';
  hidePassword.style.display = 'inline-block';
});
hidePassword.addEventListener('click', function() {
  passwordInput.type = 'password';
  hidePassword.style.display = 'none';
  showPassword.style.display = 'inline-block';
});