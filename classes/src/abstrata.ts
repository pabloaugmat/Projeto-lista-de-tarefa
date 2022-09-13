

type DadosConta ={
    nome: string;
    numero: string;
    endereco: string;
}

abstract class ContaBanco {

    abstract abrirConta(dados: DadosConta) : boolean;

}

class PessoaFisica extends ContaBanco {

    abrirConta(dados: DadosConta): boolean {
        
        console.log(`Conta Pessoa Fisica criada: ${dados.nome}`);
        
        return true;
    }

}

class PessoaJuridica extends ContaBanco{

    abrirConta(dados: DadosConta): boolean {
        
        
        console.log(`Conta Pessoa Juridica criada: ${dados.nome}`);

        return true;
    }

}

const conta1 = new PessoaFisica();
const conta2 = new PessoaJuridica();

conta1.abrirConta({nome: "Amanda", numero: "123", endereco: "Renno Junior"});
conta2.abrirConta({nome: "Pablo", numero: "456", endereco: "Martinho Licio"});