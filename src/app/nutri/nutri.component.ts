import { Component, OnInit } from '@angular/core';
import { Router, RouterLink} from '@angular/router';
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
          label: 'Listar clientes del sistema',
          icon: PrimeIcons.LIST,
          routerLink: 'clientes'
        },
        {
          label: 'Datos nutricionales',
          icon: PrimeIcons.BARS,
          routerLink: 'datosnutricionales'
        }
      ]
    },
    {
      label: 'Alimentos',
      icon: PrimeIcons.APPLE,
      items: [
        {
          label: 'Menús',
          icon: PrimeIcons.FILE,
          items: [
            {
              label: 'Asignar comidas',
              icon: PrimeIcons.PLUS,
              routerLink: 'asignarAlimentos'
            }, 
            {
              label: 'Menu semanal',
              icon: PrimeIcons.CALENDAR_PLUS,
              routerLink: 'menuSemanal'
            },{
              label: 'Listar Menus',
              icon: PrimeIcons.LIST,
              routerLink: 'listarMenus'
            }
          ]
        },
        {
          label: 'Ingresar comidas',
          icon: PrimeIcons.PLUS,
          routerLink: 'alimentos'
        }, 
        {
          label: 'Listar comidas',
          icon: PrimeIcons.LIST,
          routerLink: 'listarAlimentos'
        }
      ]
    },
    {
      label: 'Consulta',
      icon: PrimeIcons.BOOK,
      items: [
      {
        label: 'Consulta',
        icon: PrimeIcons.BOOKMARK,
        routerLink: 'consulta'
      },
      {
        label: 'Listado de consultas',
        icon: PrimeIcons.TABLE,
        routerLink: 'listarconsultas'
      }]
    },
    {
      label: 'Cerrar sesión',
      icon: PrimeIcons.POWER_OFF,
      command: () => this.salir()
    }];
  }
  
  salir(){
    this.login.cerrarSesion();
    this.router.navigateByUrl("");
  }

}
