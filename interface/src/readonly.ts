

interface ProdutoProps {
    readonly id: string;
    nome : string;
    descricao: string;
}

const novoProduto: ProdutoProps = {
    id: "123",
    nome: "caixa",
    descricao: "caixa grande"
}

//novoProduto.id = "456";

console.log(novoProduto);