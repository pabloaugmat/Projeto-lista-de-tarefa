

interface CursoProps {
    id: number;
    nome: string;
    preco: number;
    promocao: (preco: number) => void;
}

const novoCurso: CursoProps = {
    id: 123,
    nome: "TypeScript",
    preco: 750,
    promocao: (preco: number): void => console.log(`O preço promocional é ${preco}`)
}

/*
function mostraPromocao(preco: number): void{

    console.log(`A preço promocional é ${preco}!!!`);

}
*/

console.log(novoCurso.promocao(50));

