"use strict";
class Jogo {
    servidor;
    id = "123456";
    constructor(servidor) {
        this.servidor = servidor;
    }
    get getServidor() {
        return this.servidor;
    }
    set setServidor(servidor) {
        this.servidor = servidor;
    }
}
