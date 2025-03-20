document.addEventListener('DOMContentLoaded', () => {
  let containers = document.querySelectorAll('.container');
  let changeColorBtns = document.querySelectorAll('.changeColorBtn');
  changeColorBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      let randomColor = getRandomColor();
      containers[index].style.backgroundColor = randomColor;
    });
  });
  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});