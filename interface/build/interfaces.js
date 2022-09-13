"use strict";
function novaLoja({ nome, rua, status }) {
    console.log(nome);
    console.log(rua);
    console.log(status);
    console.log("================");
}
novaLoja({ nome: "Loja1", rua: "rua X", status: false });
novaLoja({ nome: "Loja2", rua: "rua Y", status: true });
