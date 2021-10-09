import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaUsuarioLogIn } from '../modelos/ListadoObjetos';
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
}
