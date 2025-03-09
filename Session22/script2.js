let number = [2, 5, 7, 4, 1, 8, 6];
let input = Number(prompt("nhap 1 so:"));
let found = false;
for (let i = 0; i < number.length; i++) {
    if (number[i] === input) {
        found = true;
        break;
    }
}
document.write(found ? "Bingo" : "chuc ban may man lan sau");