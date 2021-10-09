import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {
  usuario_actual: string;
  tipo: string;

  constructor() {
    this.usuario_actual = "";
    this.tipo = "";
  }
  
  usuarioIngresado(usuario_ingresado: string, tipo:string){
    this.usuario_actual = usuario_ingresado;
    this.tipo = tipo;
  }

  getUsuario(){
    return this.usuario_actual;
  }

  getTipoUsuario(){
    return this.tipo;
  }

  cerrarSesion(){
    return this.usuario_actual = "";
    return this.tipo = "";
  }

}
