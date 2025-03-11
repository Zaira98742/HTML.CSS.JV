function switchWord(str) {
  let words = str.split(" ");
  let capitalizedWords =;
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      let firstLetter = word.charAt(0).toUpperCase();
      let restOfWord = word.slice(1).toLowerCase();
      capitalizedWords.push(firstLetter + restOfWord);
    } else {
      capitalizedWords.push(word);
    }
  }
  return capitalizedWords.join(" ");
}

console.log(switchWord(" hello WORLD "));
console.log(switchWord(" rIKKei acaDEMy "));