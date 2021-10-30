import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Nutricionistas, Clientes,RespuestaUsuarioLogIn, Alimentos, DatosPorCliente, DatosGerneralesConsultaLista, DatosTorsoList, DatosBrazoList, DatosPiernaList, Menus, MenusSemanal, MenusGeneral, ListaDatosGeneralesNutri, ListadoMenusSemanales, ListaPerfilCliente, listaDatosCliente, listaTorso, listaPierna, listaBrazo, menuDiaList, menuSobrantesList } from '../modelos/ListadoObjetos';
import { AlimentoBody, ClienteBody, ConsultaBody, DatosNutricionalesBody, MenuBody, MenuSBody, NutriBody } from '../modelos/Bodies';
import { GuardarRespuesta } from '../modelos/GuardarRespuesta';
const BE_API = environment.urlBackEnd;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class ServicioBackendService {

  constructor(private http: HttpClient) { }

  verificarDatosLogIn(tipo: string, usuario: string, pw: string){
    let url:string = BE_API+"/inicio/tipo/"+tipo+ "/usuario/"+usuario +"/pw/"+pw;
    return this.http.get<RespuestaUsuarioLogIn>(url, httpOptions);
  }
  IngresarNutri(nombre: string, colegiado:number, telefono:string, descripcion:string, pw1:string){
    let url:string = BE_API + "/ingresarNutricionista";
    let body:NutriBody = new NutriBody(nombre, colegiado, telefono, descripcion, pw1);
    return this.http.post<GuardarRespuesta>(url,body,httpOptions);
  }
  ListarNutricionistas(){
    let url:string = BE_API+"/listarNutricionistas";
    return this.http.get<Nutricionistas>(url, httpOptions);
  }
  IngresarCliente(pw: string , sexo: string , telefono:string, nombre: string, nutris:string){
    let url:string = BE_API+ "/nutris/ingresarCliente";
    let body:ClienteBody = new ClienteBody(pw,  sexo, telefono, nombre, nutris);
    return this.http.post<GuardarRespuesta>(url, body,httpOptions);
  }
  PerfilNutricionista(usuario: string){
    let url: string = BE_API + "/nutris/perfil/" + usuario;
    return this.http.get<Nutricionistas>(url, httpOptions);
  }
  ListarClientes(usuario: string){
    let url: string = BE_API + "/nutris/listarClientes/" + usuario;
    return this.http.get<Clientes>(url, httpOptions);
  }
  IngresarAlimento(nombre: string, tipo: string, calorias: number, prot: number, carb: number, grasa: number){
    let url: string = BE_API + "/nutris/alimentos/ingresar";
    let body:AlimentoBody = new AlimentoBody(nombre, tipo, calorias, prot, carb, grasa);
    return this.http.post<GuardarRespuesta>(url, body, httpOptions);
  }
  ListarAlimento(){
    let url: string = BE_API + "/nutris/alimentos/listar";
    return this.http.get<Alimentos>(url, httpOptions);
  }
  ListarAlimentoTipo(tipo:string){
    let url: string = BE_API + "/nutris/alimentos/listar/tipo/" +  tipo;
    return this.http.get<Alimentos>(url, httpOptions);
  }
  NuevaConsulta(calorias_dia: number, imc: number, peso: number, altura: number, tricep: number, pectoral: number, supracrestal: number, subescapular: number, biceps: number, medial_pierna: number, frontal_muslo: number, abdominal: number, supraespinal: number, cliente: string, nutri: string){
    let url:string = BE_API + "/nutris/consulta/nueva";
    let body:ConsultaBody= new ConsultaBody(calorias_dia, imc, peso, altura, tricep, pectoral, supracrestal, subescapular, biceps, medial_pierna, frontal_muslo, abdominal, supraespinal, cliente, nutri);
    return this.http.post<GuardarRespuesta>(url, body, httpOptions);
  }
  ActualizarDatosNutricionales(calorias_dia: number, imc: number, peso: number, altura: number, cliente: string){
    let url:string = BE_API + "/nutris/datosnutricionales";
    let body:DatosNutricionalesBody = new DatosNutricionalesBody(calorias_dia, imc, peso, altura,cliente);
    return this.http.post<GuardarRespuesta>(url, body, httpOptions);
  }
  DatosPorCliente(cliente:string){
    let url:string = BE_API + "/nutris/cliente/datos/"+cliente;
    return this.http.get<DatosPorCliente>(url, httpOptions);
  }
  GuardarMenu(desayuno:string, almuerzo:string, cena:string, cliente:string){
    let url: string = BE_API + "/nutris/ingresarMenu";
    let body: MenuBody = new MenuBody(desayuno, almuerzo, cena, cliente);
    return this.http.post<GuardarRespuesta>(url, body, httpOptions);
  }
  ListarDatosGeneralesConsulta(nutri:string){
    let url: string = BE_API + "/nutris/consultas/generales/"+nutri;
    return this.http.get<DatosGerneralesConsultaLista>(url, httpOptions);
  }
  ListarDatosTorsoConsulta(nutri:string){
    let url:string = BE_API + "/nutris/consultas/torso/"+nutri;
    return this.http.get<DatosTorsoList>(url, httpOptions);
  }
  listarDatosBrazosConsulta(nutri:string){
    let url:string = BE_API + "/nutris/consultas/brazo/"+nutri;
    return this.http.get<DatosBrazoList>(url, httpOptions);
  }
  ListarDatosPiernaConsulta(nutri:string){
    let url:string = BE_API + "/nutris/consultas/pierna/"+nutri;
    return this.http.get<DatosPiernaList>(url, httpOptions);
  }
  ListarMenus(cliente:string){
    let url:string = BE_API + "/nutris/listarMenu/" + cliente;
    return this.http.get<Menus>(url, httpOptions);
  }
  ingresarMenuSemanal(cliente:string, dia:string, menu:number){
    let url:string = BE_API + "/nutris/ingresarMenuSemanal";
    let body: MenuSBody = new MenuSBody(cliente, dia, menu);
    return this.http.post<GuardarRespuesta>(url, body ,httpOptions);
  }
  listarMenuSemanal(cliente:string, nutri:string){
    let url:string = BE_API + "/nutris/listarMenu/" + cliente + '/nutri/'+ nutri;
    return this.http.get<MenusSemanal>(url, httpOptions);
  }
  listarMenusGeneral(nutri:string){
    let url:string = BE_API + "/nutris/listarMenu/nutri/"+nutri;
    return this.http.get<MenusGeneral>(url, httpOptions);
  }
  listaDatosGeneralesNutri(nutri:string){
    let url:string = BE_API + "/nutris/cliente/datosgenerales/"+nutri;
    return this.http.get<ListaDatosGeneralesNutri>(url, httpOptions);
  }
  listaMenuSemanalClientes(nutri:string){
    let url:string = BE_API + "/nutris/listarMenuSemanal/nutri/"+nutri;
    return this.http.get<ListadoMenusSemanales>(url, httpOptions);
  }
  perfilCliente(usuario:string){
    let url:string = BE_API + "/cliente/perfil/" +usuario;
    return this.http.get<ListaPerfilCliente>(url, httpOptions);
  }
  ActualizarDatosCliente(calorias_dia: number, imc: number, peso: number, altura: number, cliente: string){
    let url:string = BE_API + "/cliente/datosnutricionales";
    let body:DatosNutricionalesBody = new DatosNutricionalesBody(calorias_dia, imc, peso, altura,cliente);
    return this.http.post<GuardarRespuesta>(url, body ,httpOptions);
  }
  listaDatosCliente(usuario:string){
    let url:string = BE_API + "/cliente/progreso/datos/"+usuario;
    return this.http.get<listaDatosCliente>(url,httpOptions);
  }
  DatosTorsoCliente(usuario:string){
    let url:string = BE_API + "/cliente/progreso/datos/torso/"+ usuario;
    return this.http.get<listaTorso>(url, httpOptions);
  }
  DatosPiernaCliente(usuario:string){
    let url:string = BE_API + "/cliente/progreso/datos/pierna/"+usuario;
    return this.http.get<listaPierna>(url,httpOptions);
  }
  DatosBrazosCliente(usuario:string){
    let url:string = BE_API + "/cliente/progreso/datos/brazo/"+usuario;
    return this.http.get<listaBrazo>(url,httpOptions);
  }
  MenuSemanalCliente(usuario:string){
    let url:string = BE_API + "/cliente/menuSemanal/"+usuario;
    return this.http.get<menuDiaList>(url,httpOptions);
  }
  MenusNoSemanal(usuario: string){
    let url:string = BE_API + "/cliente/menuSemanal/menusopciones/"+usuario;
    return this.http.get<menuSobrantesList>(url,httpOptions);
  }
  actualizarMenu(cliente:string, dia:string, id: number){
    let url: string = BE_API + "/cliente/actualizarMenuSemanal/cliente/"+cliente+"/dia/"+dia+"/menu/"+id;
    return this.http.put<GuardarRespuesta>(url, httpOptions);
  }
}
