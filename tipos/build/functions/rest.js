"use strict";
function totalVendas(...vendas) {
    let valorTotal = 0, i;
    for (i = 0; i < vendas.length; i++) {
        valorTotal += vendas[i];
    }
    console.log(`Você fez ${vendas.length} hoje!`);
    console.log(`o valor total das vendas foi de ${valorTotal}!`);
}
totalVendas(10, 20, 50, 70);
