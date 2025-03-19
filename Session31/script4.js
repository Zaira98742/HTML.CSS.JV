document.addEventListener('DOMContentLoaded', () => {
  let modal = document.getElementById('modal');
  let openBtn = document.getElementById('openModalBtn');
  let closeBtn = document.querySelector('.close');
  openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});