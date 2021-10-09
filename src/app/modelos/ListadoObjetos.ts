import { Usuario } from "./Objetos";
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