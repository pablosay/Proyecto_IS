import { Component, OnInit, ViewChild } from '@angular/core';
import { DatosBrazo, DatosGerneralesConsulta, DatosPierna, DatosTorso } from 'src/app/modelos/Objetos';
import { ServicioBackendService } from 'src/app/servicios/servicio-backend.service';
import { Table } from 'primeng/table';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';
@Component({
  selector: 'app-listar-consultas',
  templateUrl: './listar-consultas.component.html',
  styleUrls: ['./listar-consultas.component.scss']
})
export class ListarConsultasComponent implements OnInit {
  datos_generales: DatosGerneralesConsulta[];
  datos_torso: DatosTorso[];
  datos_brazo: DatosBrazo[];
  datos_piernas: DatosPierna[];
  loading: boolean = true;
  constructor(private backend: ServicioBackendService, private user_data: ServicioLoginService) {
    this.datos_generales = [];
    this.datos_torso = [];
    this.datos_brazo = [];
    this.datos_piernas = [];
  }

  ngOnInit(): void {
    this.loading = false;
    this.backend.ListarDatosGeneralesConsulta(this.user_data.getUsuario()).subscribe(data => {
      if(data.status==0){
        alert("Error");
      } else {
        this.datos_generales = data.generales;
      }
    });
    this.backend.ListarDatosTorsoConsulta(this.user_data.getUsuario()).subscribe(data => {
      if(data.status==0){
        alert("Error");
      } else {
        this.datos_torso = data.datostorso;
      }
    });
    this.backend.listarDatosBrazosConsulta(this.user_data.getUsuario()).subscribe(data => {
      if(data.status==0){
        alert("Error");
      } else {
        this.datos_brazo = data.datosbrazo;
      }
      
    });
    this.backend.ListarDatosPiernaConsulta(this.user_data.getUsuario()).subscribe(data => {
      if(data.status == 0){
        alert("error");
      } else {
        this.datos_piernas = data.datospierna;
      }
    });
  }
}
