//Primeiro exercício: percorrer a array.
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//for (let index = 0; index < numbers.length; index ++) {
    //console.log(numbers[index])
    
//}

//2. somar todos os elementos contidos e imprimir o resultado.

//console.log(5 + 9 + 3 + 19 + 70 + 8 + 100 + 2 + 35 + 27)

//3. encontrar e imprimir a média aritmética dos elementos.

//console.log((5 + 9 + 3 + 19 + 70 + 8 + 100 + 2 + 35 + 27)/10)

//4 imprima a mensagem: "valor maior que 20".
//console.log("valor maior que 20")
//5

// let maiorNumero;


// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let Maior = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] > Maior) {
//        Maior = numbers[index]
//         console.log(Maior)
        
//     }
// }
// console.log("----------------------")
// //6 encontrar valores impar no array
// let Impar = 0;
// for (let index = 0; index < numbers.length; index +=1) {
//    if (numbers[index] % 2 > 0) {
//         Impar = numbers[index]
//         console.log(Impar)
//     }
// }
// console.log("--------------------")
// let MenorValor = 3;
// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] < MenorValor) {
//         MenorValor = numbers[index]
//         console.log(MenorValor)
//     }
// s}

let arr = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log("---------------------------")
for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < i; j++) {
      if (arr[i] < arr[j]) {
        let position = arr[i];
        arr[i] = arr[j];
        arr[j] = position;
        console.log(arr[i], 'oi', arr[j])
       }
    }
    console.log(arr)
}




