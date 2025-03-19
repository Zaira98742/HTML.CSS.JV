document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggleBtn = document.getElementById('toggleBtn');
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
      toggleBtn.textContent = 'Bật chế độ tối';
    } else {
      toggleBtn.textContent = 'Bật chế độ sáng';
    }
  });
});