"use strict";
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const botaoSoma = document.getElementById('buttonSomar');
const botaoSubtrair = document.getElementById('buttonSubtrair');
function operacao({ tipo, a, b }) {
    if (tipo === "SOMAR") {
        return a + b;
    }
    else {
        return a - b;
    }
}
botaoSoma.addEventListener('click', function () {
    const resultado = operacao({
        tipo: "SOMAR",
        a: Number(input1.value),
        b: Number(input2.value)
    });
    console.log(resultado);
});
botaoSubtrair.addEventListener('click', function () {
    const resultado = operacao({
        tipo: "SUBTRAIR",
        a: Number(input1.value),
        b: Number(input2.value)
    });
    console.log(resultado);
});
