export class Usuario {
    usuario: string;
    constructor(usuario:string){
        this.usuario = usuario;
    }
}
export class Nutricionista {
    nombre: string;
    usuario: string;
    telefono:string;
    colegiado: number;
    descripcion: string;
    constructor(    nombre: string, usuario: string, telefono:string, colegiado: number, descripcion: string){
        this.nombre = nombre;
        this.usuario = usuario;
        this.telefono = telefono;
        this.colegiado = colegiado;
        this.descripcion = descripcion;
    }

}