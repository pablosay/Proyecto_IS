import { Component, OnInit } from '@angular/core';
import { Cliente, DatosGeneralesNutri, MenuSemanalCliente } from 'src/app/modelos/Objetos';
import { ServicioBackendService } from 'src/app/servicios/servicio-backend.service';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';

@Component({
  selector: 'app-datos-nutricionales',
  templateUrl: './datos-nutricionales.component.html',
  styleUrls: ['./datos-nutricionales.component.scss']
})
export class DatosNutricionalesComponent implements OnInit {
  menusSemanales: MenuSemanalCliente[];
  datos: DatosGeneralesNutri[]
  constructor(private backend: ServicioBackendService, private data_user: ServicioLoginService) {
    this.datos = [];
    this.menusSemanales = [];
  }

  ngOnInit(): void {
    this.backend.listaDatosGeneralesNutri(this.data_user.getUsuario()).subscribe(data => {
      this.datos = data.datos;
    });
    this.backend.listaMenuSemanalClientes(this.data_user.getUsuario()).subscribe(data => {
      this.menusSemanales = data.menus;
    });
    
  }

}
