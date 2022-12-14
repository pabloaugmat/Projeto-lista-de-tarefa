"use strict";
const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const botaoSoma = document.getElementById('buttonSomar');
const botaoSubtrair = document.getElementById('buttonSubtrair');
const botaoDividir = document.getElementById('buttonDividir');
const botaoMultiplicar = document.getElementById('buttonMultiplicar');
function operacao({ tipo, a, b }) {
    if (tipo === "SOMAR") {
        return a + b;
    }
    else if (tipo === "SUBTRAIR") {
        return a - b;
    }
    else if (tipo === "DIVIDIR") {
        return a / b;
    }
    else {
        return a * b;
    }
}
botaoSoma.addEventListener('click', function () {
    const resultado = operacao({
        tipo: "SOMAR",
        a: Number(input1.value),
        b: Number(input2.value)
    });
    console.log(resultado);
    alert(`RESULTADO: ${input1.value} + ${input2.value} = ${resultado}`);
});
botaoSubtrair.addEventListener('click', function () {
    const resultado = operacao({
        tipo: "SUBTRAIR",
        a: Number(input1.value),
        b: Number(input2.value)
    });
    console.log(resultado);
    alert(`RESULTADO: ${input1.value} - ${input2.value} = ${resultado}`);
});
botaoDividir.addEventListener('click', function () {
    const resultado = operacao({
        tipo: "DIVIDIR",
        a: Number(input1.value),
        b: Number(input2.value)
    });
    console.log(resultado);
    alert(`RESULTADO: ${input1.value} / ${input2.value} = ${resultado}`);
});
botaoMultiplicar.addEventListener('click', function () {
    const resultado = operacao({
        tipo: "MULTIPLICAR",
        a: Number(input1.value),
        b: Number(input2.value)
    });
    console.log(resultado);
    alert(`RESULTADO: ${input1.value} * ${input2.value} = ${resultado}`);
});
