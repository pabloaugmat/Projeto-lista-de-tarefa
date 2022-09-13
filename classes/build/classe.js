"use strict";
class Loja {
    nome;
    categoria;
    constructor(nome, categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }
    criarLoja() {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`);
    }
    emitirPedido(mesa, ...pedidos) {
        pedidos.map((pedido) => {
            console.log("Saindo novo pedido: ", pedido);
        });
        return `Pedido na mesa: ${mesa}`;
    }
    mudarStatus(status) {
        if (status === "Aberto") {
            console.log("Loja aberta com sucesso!");
        }
        else {
            console.log("Loja fechada!");
        }
    }
}
const redBurger = new Loja("Red Burger", "lanches");
const sucos = new Loja("Sucão Gelado", "sucos");
redBurger.criarLoja();
console.log(redBurger.emitirPedido(456, "Suco Gelado", "Hamburger", "Coca"));
redBurger.mudarStatus("Fechado");
