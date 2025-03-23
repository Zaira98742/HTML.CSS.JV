let inputText = document.getElementById('inputText');
let charCount = document.getElementById('charCount');
let countButton = document.getElementById('countButton');
countButton.addEventListener('click', function() {
  let text = inputText.value;
  let length = text.length;
  charCount.textContent = length + ' ký tự';
});