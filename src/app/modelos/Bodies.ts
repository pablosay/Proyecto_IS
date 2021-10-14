export class NutriBody{
    nombre: string;
    colegiado: number;
    telefono: string;
    des: string;
    pw: string;
    constructor(nombre: string, colegiado:number, telefono:string, descripcion:string, pw1:string){
        this.nombre = nombre;
        this.colegiado = colegiado;
        this.telefono = telefono;
        this.des = descripcion;
        this.pw = pw1;
    }
}