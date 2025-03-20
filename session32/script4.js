document.addEventListener('DOMContentLoaded', () => {
  let emailInput = document.getElementById('emailInput');
  let checkBtn = document.getElementById('checkBtn');
  let result = document.getElementById('result');
  function isValidEmail(email) {
    if (!email.includes('@')) {
      return false;
    }
    if (!email.endsWith('.com') && !email.endsWith('.vn')) {
      return false;
    }
    return true;
  }
  checkBtn.addEventListener('click', () => {
    let email = emailInput.value.trim();
    if (isValidEmail(email)) {
      result.textContent = 'email hợp lệ!';
      result.className = 'valid';
    } else {
      result.textContent = 'email không hợp lệ!';
      result.className = 'invalid';
    }
  });
});