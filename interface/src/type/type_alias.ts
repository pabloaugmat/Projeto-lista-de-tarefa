

type Uuid = number | string | null;

function acessar(uuid: Uuid, nome: string) {
    console.log(`ID: ${uuid} - Bem vindo ${nome}`)
}

function logUsuario(uuid: Uuid) {
    console.log(`Conta refrente ao UUID: ${uuid}`)
}

acessar(123, "Pablo")
acessar("546", "Amanda")
logUsuario(789)

type Moeda = "BRL" | "EUR" | "USD"

function comprarItem(moeda: Moeda){
    console.log("Comprando com a moeda: ", moeda)
}

comprarItem("USD")