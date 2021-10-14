import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Nutricionistas, RespuestaUsuarioLogIn } from '../modelos/ListadoObjetos';
import { NutriBody } from '../modelos/Bodies';
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
}
