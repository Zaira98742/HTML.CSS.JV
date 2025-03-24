document.addEventListener('DOMContentLoaded', () => {
  let registerForm = document.getElementById('registerForm');
  let emailInput = document.getElementById('email');
  let passwordInput = document.getElementById('password');
  let confirmPasswordInput = document.getElementById('confirmPassword');
  let emailError = document.getElementById('emailError');
  let passwordError = document.getElementById('passwordError');
  let confirmPasswordError = document.getElementById('confirmPasswordError');
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();
    let confirmPassword = confirmPasswordInput.value.trim();
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
    if (confirmPassword === '') {
      confirmPasswordError.textContent = 'Xác nhận mật khẩu không được bỏ trống';
    } else if (password !== confirmPassword) {
      confirmPasswordError.textContent = 'Mật khẩu không trùng khớp';
    } else {
      confirmPasswordError.textContent = '';
    }
    if (localStorage.getItem(email)) {
      emailError.textContent = 'Email đã tồn tại';
      return;
    }
    if (email !== '' && password !== '' && password === confirmPassword) {
      localStorage.setItem(email, password);
      alert('Đăng ký thành công!');
      registerForm.reset();
    }
  });
});