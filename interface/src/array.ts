

interface TecnologiaProps{
    id: string;
    nome: string;
    descricao?: string;
}

interface NomesProps{
    tecnologias: TecnologiaProps[];
}

const frontEnd: NomesProps = {
    tecnologias: [
        {id: "123", nome: "JavaScript"},
        {id: "456", nome: "CSS", descricao: "Estilo"}
    ]
}

console.log(frontEnd);