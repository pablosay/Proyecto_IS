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
export class Cliente {
    nombre: string;
    usuario: string;
    sexo: string;
    telefono: string;
    constructor(nombre: string, usuario: string, sexo: string, telefono: string){
        this.nombre = nombre;
        this.usuario = usuario;
        this.sexo = sexo;
        this.telefono = telefono;
    }
}
export class Alimento {
    nombre: string;
    tipo: string;
    calorias: number;
    prot: number;
    carb: number;
    grasa: number;
    constructor(nombre: string, tipo: string, cal: number, prot: number, carb: number, grasa: number){
        this.nombre = nombre;
        this.tipo = tipo;
        this.calorias = cal;
        this.prot = prot;
        this.carb = carb;
        this.grasa = grasa;
    }
}

export class Datos {
    calorias_dia: number;
    imc: number;
    peso: number;
    altura: number;
    constructor(calorias_dia: number, imc: number, peso: number, altura: number){
        this.calorias_dia = calorias_dia;
        this.imc = imc;
        this.peso = peso;
        this.altura = altura;
    }
}

export class DatosGerneralesConsulta {
    numero: number;
    nombre: string;
    fecha: string;
    calorias_dia: number;
    imc: number;
    peso: number;
    altura: number;
    constructor(numero: number, nombre: string, fecha: string, calorias_dia: number, imc: number, peso: number, altura: number){
        this.numero = numero;
        this.nombre = nombre;
        this.fecha = fecha;
        this.calorias_dia = calorias_dia;
        this.imc = imc;
        this.peso = peso;
        this.altura = altura;
    }
}

export class DatosTorso{
    numero: number;
    nombre: string;
    fecha: string;
    pectoral: number;
    supracrestal: number;
    subescapular: number;
    supraespinal: number;
    abdominal: number;
    constructor( numero: number, nombre: string, fecha:string, pectoral: number, supracrestal: number, subescapular: number, supraespinal: number, abdominal: number){
        this.numero = numero;
        this.nombre = nombre;
        this.fecha = fecha;
        this.pectoral = pectoral;
        this.supracrestal = supracrestal;
        this.subescapular = subescapular;
        this.abdominal = abdominal;
        this.supraespinal = supraespinal;
    }
}

export class DatosBrazo{
    numero: number;
    nombre: string;
    fecha: string;
    biceps: number;
    tricep: number;
    constructor( numero: number, nombre: string, fecha:string, biceps: number, tricep:number){
        this.numero = numero;
        this.nombre = nombre;
        this.fecha = fecha;
        this.biceps = biceps;
        this.tricep = tricep;
    }
}

export class DatosPierna {
    numero: number;
    nombre: string;
    fecha: string;
    medial_pierna: number;
    frontal_muslo: number;
    constructor(numero: number, nombre: string, fecha: string, medial_pierna: number, frontal_muslo: number){
        this.numero = numero;
        this.nombre = nombre;
        this.fecha = fecha;
        this.medial_pierna = medial_pierna;
        this.frontal_muslo = frontal_muslo;
    }
}

export class Menu {
    id: number;
    desayuno: string;
    almuerzo: string;
    cena: string;
    constructor(id: number, desayuno: string, almuerzo: string, cena: string){
        this.id = id;
        this.desayuno = desayuno;
        this.almuerzo = almuerzo;
        this.cena = cena;
    }
}

export class MenuSemanal{
    client: string;
    dia_semana: string;
    desayuno: string;
    almuerzo: string;
    cena: string;
    constructor(client: string, dia_semana: string, desayuno: string, almuerzo: string, cena: string){
        this.client = client;
        this.dia_semana = dia_semana;
        this.desayuno = desayuno;
        this.almuerzo = almuerzo;
        this.cena = cena;
    }
}
export class MenuGeneral{
    id: number;
    desayuno: string;
    almuerzo: string;
    cena: string;
    cliente: string;
    constructor(id: number, desayuno: string, almuerzo: string, cena: string, cliente:string){
        this.id = id;
        this.desayuno = desayuno;
        this.almuerzo = almuerzo;
        this.cena = cena;
        this.cliente = cliente;
    }
}
export class DatosGeneralesNutri{
    cliente:string;
    nombre: string;
    calorias_dia:string;
    imc: string;
    peso:string;
    altura: string;
    constructor(cliente:string, nombre: string, calorias_dia:string, imc: string, peso:string, altura: string){
        this.cliente= cliente;
        this.nombre = nombre;
        this.calorias_dia = calorias_dia;
        this.imc = imc;
        this.peso = peso;
        this.altura = altura;
    }
}
export class MenuSemanalCliente{
    usuario:string;
    nombre:string;
    dia:string;
    desayuno:string;
    almuerzo:string;
    cena:string;
    constructor(usuario:string, nombre:string, dia:string, desayuno:string, almuerzo:string, cena:string){
        this.usuario = usuario;
        this.nombre = nombre;
        this.dia = dia;
        this.desayuno = desayuno;
        this.almuerzo = almuerzo;
        this.cena = cena;
    }
}
export class perfilCliente{
    nombre:string;
    sexo:string;
    telefono:string;
    nutri:string;
    calorias_dia: number;
    imc: number;
    peso: number;
    altura: number;
    constructor(nombre:string, sexo:string, telefono:string, nutri:string, calorias: number, imc: number, peso: number, altura: number){
        this.nombre = nombre;
        this.sexo = sexo;
        this.telefono = telefono;
        this.nutri = nutri;
        this.calorias_dia = calorias;
        this.imc = imc;
        this.peso = peso;
        this.altura = altura; 
    }

}
export class DatosCliente{
    fecha:string;
    calorias_dia:number; 
    imc:number; 
    peso:number;
    altura:number;
    constructor(fecha:string, calorias_dia:number, imc:number, peso:number, altura:number){
        this.fecha = fecha;
        this.calorias_dia = calorias_dia;
        this.imc = imc;
        this.peso = peso;
        this.altura = altura;
    }
}

export class TorsoCliente{
    fecha: string;
    pectoral: number;
    supracrestal: number;
    subescapular: number;
    supraespinal: number;
    abdominal: number;
    constructor(fecha:string, pectoral: number, supracrestal: number, subescapular: number, supraespinal: number, abdominal: number){
        this.fecha = fecha;
        this.pectoral = pectoral;
        this.supracrestal = supracrestal;
        this.subescapular = subescapular;
        this.abdominal = abdominal;
        this.supraespinal = supraespinal;
    }
}
export class BrazoCliente{
    fecha: string;
    biceps: number;
    tricep: number;
    constructor(fecha:string, biceps: number, tricep:number){
        this.fecha = fecha;
        this.biceps = biceps;
        this.tricep = tricep;
    }   
}

export class PiernaCliente {
    fecha: string;
    medial_pierna: number;
    frontal_muslo: number;
    constructor(fecha: string, medial_pierna: number, frontal_muslo: number){
        this.fecha = fecha;
        this.medial_pierna = medial_pierna;
        this.frontal_muslo = frontal_muslo;
    }
}

export class menuDia {
    dia: string;
    id: number;
    desayuno: string;
    almuerzo:string;
    cena: string;
    constructor(dia: string, id: number, desayuno: string, almuerzo:string, cena: string){
        this.dia = dia;
        this.id = id;
        this.desayuno = desayuno;
        this.almuerzo = almuerzo;
        this.cena = cena;
    }
}

export class MenuOpcionesSobrantes{
    id: number;
    desayuno: string;
    almuerzo:string;
    cena: string;
    constructor(id: number, desayuno: string, almuerzo:string, cena: string){
        this.id = id;
        this.desayuno = desayuno;
        this.almuerzo = almuerzo;
        this.cena = cena;
    }
}