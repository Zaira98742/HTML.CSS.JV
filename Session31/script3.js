document.addEventListener('DOMContentLoaded', () => {
  let container = document.getElementById('container');
  let colorBoxes = document.querySelectorAll('.color-box');
  colorBoxes.forEach(box => {
    box.addEventListener('click', (event) => {
      let color = event.target.getAttribute('data-color');
      container.style.backgroundColor = color;
    });
  });
});