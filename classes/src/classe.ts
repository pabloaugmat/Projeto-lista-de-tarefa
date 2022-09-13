

type Status = "Aberto" | "Fechado";

class Loja {

    nome: string;
    categoria: string;

    constructor(nome: string, categoria: string) {
        this.nome = nome;
        this.categoria = categoria;
    }

    criarLoja(): void {
        console.log(`Loja ${this.nome}, categoria: ${this.categoria}`);
    }

    emitirPedido(mesa: number, ...pedidos: string[]): string {

        pedidos.map((pedido) => {
            console.log("Saindo novo pedido: ", pedido);
        })

        return `Pedido na mesa: ${mesa}`;
    }

    mudarStatus(status: Status): void {

        if (status === "Aberto") {
            console.log("Loja aberta com sucesso!");
        } else {
            console.log("Loja fechada!");
        }

    }

}

const redBurger = new Loja("Red Burger", "lanches");

const sucos = new Loja("Sucão Gelado", "sucos");

//console.log(redBurger);
//console.log(sucos);

redBurger.criarLoja();

console.log(redBurger.emitirPedido(456, "Suco Gelado", "Hamburger", "Coca"));

redBurger.mudarStatus("Fechado");