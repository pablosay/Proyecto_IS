import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem, PrimeIcons} from 'primeng/api';
import { ServicioLoginService } from '../servicios/servicio-login.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  items: MenuItem[];

  constructor(private login: ServicioLoginService, private router: Router) {
    this.items = [];
  }

  ngOnInit(): void {
    this.items = [{
      label: 'Registro nutricionistas',
      icon: PrimeIcons.PLUS,
      routerLink: 'ingresarNutri'
    },
    {
      label: 'Nutricionistas',
      icon: PrimeIcons.LIST,
      routerLink: 'listarNutris'
      
    },
    {
      label: 'Cerrar sesión',
      icon: PrimeIcons.POWER_OFF,
      command: () => this.salir()
    }]
  }

  salir(){
    this.login.cerrarSesion();
    localStorage.removeItem('token');
    this.router.navigateByUrl("/inicio");
  }

}
