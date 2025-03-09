let array = [' ' , false, 0, 5, 10, 'Hello world!','JavaScript', 0, null, true, 7, '',undefined];
for (let i = 0; i < array.length; i++) {
    if (false == array[i]||null == array[i]||undefined==array[i]) {
        array.splice(i, 1);
        i--;
    }
}
document.write(array);