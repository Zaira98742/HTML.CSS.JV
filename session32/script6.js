document.addEventListener('DOMContentLoaded', () => {
  let text = document.getElementById('text');
  let increaseBtn = document.getElementById('increaseBtn');
  let decreaseBtn = document.getElementById('decreaseBtn');
  let fontSize = 16;
  increaseBtn.addEventListener('click', () => {
    fontSize += 2;
    text.style.fontSize = fontSize + 'px';
  });
  decreaseBtn.addEventListener('click', () => {
    fontSize -= 2;
    text.style.fontSize = fontSize + 'px';
  });
});