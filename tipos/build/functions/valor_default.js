"use strict";
function cadastro(email, nome = "Aluno", idade) {
    let data = { email, nome, idade };
    console.log(data);
}
cadastro("pabloaugmat@gmail.com", undefined, 26);
cadastro("teste@gmail.com", "Amanda");
