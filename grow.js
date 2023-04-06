const size = 6;
for (let row = 0; row < size; row++) {
let line = '';
for (let col = 0; col < size; col++) {
    if (row + col == size - 1) {
        line = line + 'x';
    } else {
        line = line + 'o';
    }
}
console.log(line);
}