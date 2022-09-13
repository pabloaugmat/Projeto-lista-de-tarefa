

function cadastro(email: string, nome = "Aluno", idade?: number ): void{

    let data = {email, nome, idade};

    console.log(data);
}

cadastro("pabloaugmat@gmail.com", undefined, 26);
cadastro("teste@gmail.com", "Amanda");