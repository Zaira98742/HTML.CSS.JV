document.addEventListener('DOMContentLoaded', () => {
  let clickBtn = document.getElementById('clickBtn');
  let clickCount = document.getElementById('clickCount');
  let count = 0;
  clickBtn.addEventListener('click', () => {
    count++;
    clickCount.textContent = `Số lần bấm: ${count}`;
  });
});