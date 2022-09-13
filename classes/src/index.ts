

import { connection, statusConnection } from './database/connection'
import status from './database/aplicativo'

function acessarSistema(){
    connection({ip: "192.168.0.1", name: "teste"});
}

acessarSistema();

statusConnection();

status();