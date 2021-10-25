import { Alimento, Cliente, Usuario, Datos, DatosBrazo, DatosGerneralesConsulta, DatosPierna, DatosTorso, Menu, MenuSemanal, MenuGeneral, DatosGeneralesNutri, MenuSemanalCliente } from "./Objetos";
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

export class Clientes{
    status: number;
    message: string;
    clientes: Cliente[];
    constructor(status: number, message:string, cliente: Cliente[]){
        this.status = status,
        this.message = message;
        this.clientes = cliente;
    }
}
export class Alimentos{
    status: number;
    message: string;
    alimentos: Alimento[];
    constructor(status: number, message:string, cliente: Alimento[]){
        this.status = status,
        this.message = message;
        this.alimentos = cliente;
    }
}

export class DatosPorCliente{
    status: number;
    message: string;
    datos: Datos[];
    constructor(status: number, message:string, datos: Datos[]){
        this.status = status,
        this.message = message;
        this.datos = datos;
    }
}

export class DatosGerneralesConsultaLista{
    status: number;
    message: string;
    generales: DatosGerneralesConsulta[];
    constructor(status: number, message:string, datos: DatosGerneralesConsulta[]){
        this.status = status,
        this.message = message;
        this.generales = datos;
    }
}

export class DatosBrazoList{
    status: number;
    message: string;
    datosbrazo: DatosBrazo[];
    constructor(status: number, message:string, datos: DatosBrazo[]){
        this.status = status,
        this.message = message;
        this.datosbrazo = datos;
    }
}

export class DatosTorsoList{
    status: number;
    message: string;
    datostorso: DatosTorso[];
    constructor(status: number, message:string, datos: DatosTorso[]){
        this.status = status,
        this.message = message;
        this.datostorso = datos;
    }   
}

export class DatosPiernaList{
    status: number;
    message: string;
    datospierna: DatosPierna[];
    constructor(status: number, message:string, datos: DatosPierna[]){
        this.status = status,
        this.message = message;
        this.datospierna = datos;
    }   
}

export class Menus{
    status: number;
    message: string;
    menus: Menu[];
    constructor(status: number, message:string, datos: Menu[]){
        this.status = status,
        this.message = message;
        this.menus = datos;
    }  
}

export class MenusSemanal{
    status: number;
    message: string;
    menus: MenuSemanal[];
    constructor(status: number, message:string, datos: MenuSemanal[]){
        this.status = status,
        this.message = message;
        this.menus = datos;
    }  
}

export class MenusGeneral {
    status: number;
    message: string;
    menusgeneral: MenuGeneral[];
    constructor(status: number, message:string, datos: MenuGeneral[]){
        this.status = status,
        this.message = message;
        this.menusgeneral = datos;
    }  
}

export class ListaDatosGeneralesNutri{
    status: number;
    message: string;
    datos: DatosGeneralesNutri[];
    constructor(status: number, message:string, datos: DatosGeneralesNutri[]){
        this.status = status,
        this.message = message;
        this.datos = datos;
    }  
}

export class ListadoMenusSemanales{
    status: number;
    message: string;
    menus: MenuSemanalCliente[];
    constructor(status: number, message:string, datos: MenuSemanalCliente[]){
        this.status = status,
        this.message = message;
        this.menus = datos;
    } 
}
