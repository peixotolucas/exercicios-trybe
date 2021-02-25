let custo = 200;
let venda = 239;
let custoTotal = custo + custo*20/100 
let lucroTotal = venda - custoTotal
if (lucroTotal  >= 0 ) {
    console.log("$ucesso")
}
else if (lucroTotal * 1000 < 0) {
    console.log("Fraca$$o")
}