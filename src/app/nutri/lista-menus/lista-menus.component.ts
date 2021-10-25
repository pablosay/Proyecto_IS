import { Component, OnInit } from '@angular/core';
import { ServicioBackendService } from 'src/app/servicios/servicio-backend.service';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';
import { Cliente, Menu, MenuGeneral } from 'src/app/modelos/Objetos';
@Component({
  selector: 'app-lista-menus',
  templateUrl: './lista-menus.component.html',
  styleUrls: ['./lista-menus.component.scss']
})
export class ListaMenusComponent implements OnInit {
  menus: MenuGeneral[];
  constructor(private backed:ServicioBackendService, private data_user: ServicioLoginService) {
    this.menus = [];
  }

  ngOnInit(): void {
    this.backed.listarMenusGeneral(this.data_user.getUsuario()).subscribe(data => {
      this.menus = data.menusgeneral;
    })
  }

}
