import { Usuario } from "./Objetos";
import { Nutricionista } from "./Objetos";

export class RespuestaUsuarioLogIn{
    status: number;
    message: string;
    usuario: Usuario[];
    constructor(status:number, message: string, usuario: Usuario[]){
        this.status = status;
        this.message = message;
        this.usuario = usuario;
    }
}
export class Nutricionistas{
    status: number;
    message: string;
    nutris: Nutricionista[];
    constructor(status:number, message: string, usuario: Nutricionista[]){
        this.status = status;
        this.message = message;
        this.nutris = usuario;
    }
}