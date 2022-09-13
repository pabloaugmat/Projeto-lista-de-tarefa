"use strict";
class ContaBanco {
}
class PessoaFisica extends ContaBanco {
    abrirConta(dados) {
        console.log(`Conta Pessoa Fisica criada: ${dados.nome}`);
        return true;
    }
}
class PessoaJuridica extends ContaBanco {
    abrirConta(dados) {
        console.log(`Conta Pessoa Juridica criada: ${dados.nome}`);
        return true;
    }
}
const conta1 = new PessoaFisica();
const conta2 = new PessoaJuridica();
conta1.abrirConta({ nome: "Amanda", numero: "123", endereco: "Renno Junior" });
conta2.abrirConta({ nome: "Pablo", numero: "456", endereco: "Martinho Licio" });
