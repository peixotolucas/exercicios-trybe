let fruits = [3, 4, 10, 1, 12];
let somaValores = 0;
for (let indexFruits = 0; indexFruits < fruits.length; indexFruits += 1) {
    somaValores += fruits[indexFruits];
}

if (somaValores > 15) {
console.log(somaValores);
}
else {
console.log("valor menor que 16");
}
