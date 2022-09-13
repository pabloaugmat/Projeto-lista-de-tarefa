

// id, nome, descrição, plataforma

interface JogoProps {
    readonly id: string;
    nome: string;
    descricao: string;
    plataforma: string[];
}

const left4Dead: JogoProps = {
    id: "123",
    nome: "Left 4 Dead",
    descricao: "jogo de ação e tiro",
    plataforma: ["xbox one", "pc"]
}

interface DLC extends JogoProps {
    jogoOriginal: JogoProps;
    novoConteudo: string[];
}

const left4DeadDLC: DLC = {
    jogoOriginal: left4Dead,
    id: "456",
    nome: "Left 4 Dead - DLC",
    descricao: "conteudo extra",
    plataforma: ["xbox one", "pc"],
    novoConteudo: ["Novos Mapas", "Coop", "Novas armas"]
}

console.log(left4Dead);
console.log("=================");
console.log(left4DeadDLC);
