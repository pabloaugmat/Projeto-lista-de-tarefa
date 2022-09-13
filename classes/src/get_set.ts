

class Jogo {
    private servidor: string;
    private id: string = "123456";


    constructor(servidor: string) {
        this.servidor = servidor;
    }

    get getServidor() {
        return this.servidor;
    }

    set setServidor(servidor: string) {
        this.servidor = servidor;
    }

}