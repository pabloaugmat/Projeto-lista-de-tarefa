

function logInfo(mensagem: string){
    return(target: any) =>{
        console.log(mensagem, target)
    }
}


@logInfo("Servidor esta rodando!")
class Sistema{

}