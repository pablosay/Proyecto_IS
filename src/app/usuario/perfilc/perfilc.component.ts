import { Component, OnInit } from '@angular/core';
import { ServicioBackendService } from 'src/app/servicios/servicio-backend.service';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';

@Component({
  selector: 'app-perfilc',
  templateUrl: './perfilc.component.html',
  styleUrls: ['./perfilc.component.scss']
})
export class PerfilcComponent implements OnInit {
  nombre: string;
  sexo: string;
  telefono:string;
  nutri:string;
  usuario: string;
  peso: number;
  altura: number;
  imc:number;
  calorias: number;
  constructor(private backed:ServicioBackendService, private data_user:ServicioLoginService) { 
    this.nombre = "";
    this.usuario = "";
    this.sexo = "";
    this.telefono = "";
    this.nutri = "";
    this.peso = 0;
    this.altura = 0;
    this.imc = 0;
    this.calorias = 0;
  }
  ngOnInit(): void {
    this.backed.perfilCliente(this.data_user.getUsuario()).subscribe(data => {
      this.nombre = data.perfil[0].nombre;
      this.sexo = data.perfil[0].sexo;
      this.telefono = data.perfil[0].telefono;
      this.nutri = data.perfil[0].nutri;
      this.usuario = this.data_user.getUsuario();
      this.peso = data.perfil[0].peso;
      this.altura = data.perfil[0].altura;
      this.imc = data.perfil[0].imc;
      this.calorias = data.perfil[0].calorias_dia;
    });
  }

}
