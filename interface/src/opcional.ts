

interface Cadastro {
    nome?: string;
    email: string;
    status: boolean;
}

const novoUsuario: Cadastro ={
    nome: "Pablo",
    email: "teste@gmail.com",
    status: true,
}

function novoCadastro(usuario: Cadastro){

    console.log(usuario.nome);
    console.log(usuario.email);
    console.log(usuario.status);

    console.log("================")

}

novoCadastro({email:"teste@gmail.com", status: true});
novoCadastro({nome: "Pablo", email:"teste2@gmail.com", status: false}); 