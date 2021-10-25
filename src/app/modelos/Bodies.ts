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

export class ClienteBody{
    pw: string;
    sexo: string;
    telefono: string;
    nombre: string;
    nutris: string;
    constructor(pw: string , sexo: string , telefono:string, nombre: string, nutri:string){
        this.pw = pw;
        this.sexo = sexo;
        this.telefono = telefono;
        this.nombre = nombre;
        this.nutris = nutri;
    }
}
export class AlimentoBody{
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

export class ConsultaBody{
    calorias_dia: number;
    imc: number;
    peso: number;
    altura: number;
    tricep: number;
    pectoral: number;
    supracrestal: number;
    subescapular: number;
    biceps: number;
    medial_pierna: number;
    frontal_muslo: number;
    abdominal: number;
    supraespinal: number;
    cliente: string;
    nutri: string;
    constructor(calorias_dia: number, imc: number, peso: number, altura: number, tricep: number, pectoral: number, supracrestal: number, subescapular: number, biceps: number, medial_pierna: number, frontal_muslo: number, abdominal: number, supraespinal: number, cliente: string, nutri: string){
        this.calorias_dia = calorias_dia;
        this.imc = imc;
        this.peso = peso;
        this.altura = altura;
        this.tricep = tricep;
        this.pectoral = pectoral;
        this.supracrestal = supracrestal;
        this.subescapular = subescapular;
        this.biceps = biceps;
        this.medial_pierna = medial_pierna;
        this.frontal_muslo = frontal_muslo;
        this.abdominal = abdominal;
        this.supraespinal = supraespinal;
        this.cliente = cliente;
        this.nutri = nutri;
    }
}
export class DatosNutricionalesBody{
    calorias_dia: number;
    imc: number;
    peso: number;
    altura: number;
    cliente: string;
    constructor(calorias_dia: number, imc: number, peso: number, altura: number, cliente: string){
        this.calorias_dia = calorias_dia;
        this.imc = imc;
        this.peso = peso;
        this.altura = altura;
        this.cliente = cliente;
    }
}

export class MenuBody{
    desayuno:string;
    almuerzo:string;
    cena:string;
    cliente:string;
    constructor(desayuno:string, almuerzo:string, cena:string, cliente:string){
        this.desayuno = desayuno;
        this.almuerzo = almuerzo;
        this.cena = cena;
        this.cliente = cliente;   
    }
}

export class MenuSBody{
    cliente:string;
    dia:string;
    menu:number;
    constructor(cliente:string, dia:string, menu:number){
        this.cliente = cliente;
        this.dia = dia;
        this.menu = menu;
    }
}