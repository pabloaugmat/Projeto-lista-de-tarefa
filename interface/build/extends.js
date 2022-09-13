"use strict";
// id, nome, descrição, plataforma
const left4Dead = {
    id: "123",
    nome: "Left 4 Dead",
    descricao: "jogo de ação e tiro",
    plataforma: ["xbox one", "pc"]
};
const left4DeadDLC = {
    jogoOriginal: left4Dead,
    id: "456",
    nome: "Left 4 Dead - DLC",
    descricao: "conteudo extra",
    plataforma: ["xbox one", "pc"],
    novoConteudo: ["Novos Mapas", "Coop", "Novas armas"]
};
console.log(left4Dead);
console.log("=================");
console.log(left4DeadDLC);
