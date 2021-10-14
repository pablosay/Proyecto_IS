import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem, PrimeIcons} from 'primeng/api';
import { ServicioLoginService } from '../servicios/servicio-login.service';
@Component({
  selector: 'app-nutri',
  templateUrl: './nutri.component.html',
  styleUrls: ['./nutri.component.scss']
})
export class NutriComponent implements OnInit {

  items: MenuItem[];

  constructor(private login: ServicioLoginService, private router: Router) {
    this.items = [];
  }
  ngOnInit(): void {
    this.items = [{
      label: 'Perfil',
      icon: PrimeIcons.ID_CARD,
      routerLink: 'perfil'
    },  
    {
      label: 'Clientes',
      icon: PrimeIcons.USERS,
      items: [
        {
          label: 'Ingresar clientes',
          icon: PrimeIcons.USER_PLUS,
          routerLink: 'ingresarCliente'
        },
        {
          label: 'Listar clientes',
          icon: PrimeIcons.LIST,
          routerLink: 'clientes'
        }
      ]
    },
    {
      label: 'Alimentos',
      icon: PrimeIcons.APPLE,
      routerLink: 'alimentos'
    },
    {
      label: 'Consulta',
      icon: PrimeIcons.BOOK,
      routerLink: 'consulta'
    },
    {
      label: 'Cerrar sesión',
      icon: PrimeIcons.POWER_OFF,
      command: () => this.salir()
    }]
  }
  
  salir(){
    this.login.cerrarSesion();
    this.router.navigateByUrl("");
  }

}
