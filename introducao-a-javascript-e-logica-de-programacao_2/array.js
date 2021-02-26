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

let maiorNumero;


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let Maior = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > Maior) {
       Maior = numbers[index]
        console.log(Maior)
        
    }
}
console.log("----------------------")
//6 encontrar valores impar no array
let Impar = 0;
for (let index = 0; index < numbers.length; index +=1) {
   if (numbers[index] % 2 > 0) {
        Impar = numbers[index]
        console.log(Impar)
    }
}
console.log("--------------------")
let MenorValor = 3;
for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < MenorValor) {
        MenorValor = numbers[index]
        console.log(MenorValor)
    }
}
console.log("----------------------------")

let arrayson = []
for (let indexContador = 0; indexContador < 26; indexContador += 1) {
    arrayson = indexContador
    
    

    console.log(arrayson/2)

}

