import { Component, OnInit } from '@angular/core';
import { Nutricionista } from 'src/app/modelos/Objetos';
import { ServicioBackendService } from 'src/app/servicios/servicio-backend.service';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  perfil: Nutricionista;
  usuario: string;
  constructor(private backend:ServicioBackendService, private dato_usuario: ServicioLoginService) { 
    this.perfil = new Nutricionista("","","",0,"");
    this.usuario = "";
  }

  ngOnInit(): void {
    this.backend.PerfilNutricionista(this.dato_usuario.getUsuario()).subscribe(datos => {
      this.perfil = datos.nutris[0];
      this.usuario = this.dato_usuario.getUsuario();
    });
  }

}
