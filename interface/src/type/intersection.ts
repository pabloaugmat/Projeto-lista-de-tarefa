

type Info = {
    id: number;
    nome: string;
    descricao?: string;
}

const produtoInfo: Info = {
    id: 123,
    nome: "Placa de video",
}

type Categoria = {
    slug: string;
    quantidadeProduto: number;
}

const categoria1: Categoria = {
    slug: "hardware",
    quantidadeProduto: 2
}

type ProdutoInfo = Info & Categoria;

const novoProduto2: ProdutoInfo = {
    id: 456,
    nome: "teclado RGB",
    slug: "teclado mecanico",
    quantidadeProduto: 10
}

console.log(novoProduto2)
