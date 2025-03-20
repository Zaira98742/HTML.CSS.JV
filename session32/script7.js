document.addEventListener('DOMContentLoaded', () => {
  const smallImages = document.querySelectorAll('.small-image');
  const overlay = document.getElementById('overlay');
  const largeImage = document.getElementById('largeImage');

  smallImages.forEach(smallImage => {
    smallImage.addEventListener('click', () => {
      const largeSrc = smallImage.getAttribute('data-src');
      largeImage.src = largeSrc;
      overlay.style.display = 'flex';
    });
  });

  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
  });
});