let aliquotaINSS;
let aliquotaIR;
let salarioBruto = 3000;
let salarioBase = salarioBruto - aliquotaINSS
let salarioReal = salarioBase - aliquotaIR

if (salarioBruto <= 1556.94) {
    console.log(aliquotaINSS = 8*salarioBruto/100)
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    console.log(aliquotaINSS = 9*salarioBruto/100)
}
else if (salarioBruto >= 2594.92 && salarioBruto <= 5189.82) {
    console.log(aliquotaINSS = 11*salarioBruto/100)
}
else if (salarioBruto > 5189.82) {
    console.log(aliquotaINSS = 570.88)
}

//Imposto de Renda agora
if (salarioBase <= 1903.98) {
    console.log(aliquotaIR = 0)
}
else if (salarioBase >= 1903.98 && salarioBase <= 2826.65) {
    console.log(aliquotaIR = 7.5*salarioBase/100 + 142.80)
}
else if (salarioBase >= 2826.65 && salarioBase <= 3751.05) {
    console.log (aliquotaIR = 15*salarioBase/100 + 354.80)
}
else if (salarioBase >= 3751.05 && salarioBase <= 4664.68) {
    console.log(aliquotaIR = 22.5*salarioBase/100 + 636.13)
}
else if (salarioBase > 4664.68) {
    console.log(aliquotaIR = 27.5*salarioBase/100 + 869.36)
}
//salário líquido agora

