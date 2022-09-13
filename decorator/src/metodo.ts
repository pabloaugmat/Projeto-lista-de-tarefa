

function verificaPessoa(idade: number){
    return (target: any, key: string, descriptor: PropertyDescriptor) =>{
       // console.log("target: ", target);
       // console.log("key: ", key);
       // console.log("Descriptor: ", descriptor);

        const metodoOriginal = descriptor.value

        descriptor.value = function(){
            if(idade < 18){
                console.log("Estamos cadastrando como pessoa menor de idade")
            }else{
                console.log("Adulto cadastrado no sistema")
                return metodoOriginal.apply(this)
            }
        }

    }
}


class Pessoa {
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    @verificaPessoa(20)
    cadastrarPessoa(){
        console.log("Bem vindo", this.nome)
    }

}

const pessoa1 = new Pessoa("Pablo")

pessoa1.cadastrarPessoa();