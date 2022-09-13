"use strict";
function acessar(uuid, nome) {
    console.log(`ID: ${uuid} - Bem vindo ${nome}`);
}
function logUsuario(uuid) {
    console.log(`Conta refrente ao UUID: ${uuid}`);
}
acessar(123, "Pablo");
acessar("546", "Amanda");
logUsuario(789);
function comprarItem(moeda) {
    console.log("Comprando com a moeda: ", moeda);
}
comprarItem("USD");
