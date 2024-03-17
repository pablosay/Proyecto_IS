import { Router} from '@angular/router';
import {MenuItem, PrimeIcons} from 'primeng/api';
import { ServicioLoginService } from '../servicios/servicio-login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  items: MenuItem[];
  constructor(private login: ServicioLoginService, private router: Router) {
    this.items = [];
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Welcome',
        icon: PrimeIcons.HOME,
        routerLink: 'bienvenida'
      },

      {
      label: 'Profile',
      icon: PrimeIcons.ID_CARD,
      routerLink: 'perfilCliente'
    },  
    {
      label: 'Progress',
      icon: PrimeIcons.USERS,
      items: [
        {
          label: 'Update nutrition data',
          icon: PrimeIcons.CHECK,
          routerLink: 'actualizarDatos'
        },{
          label: 'Graphs',
          icon: PrimeIcons.CHART_LINE,
          routerLink: 'progreso' 
        }
      ]
    },
    {
      label: 'Food',
      icon: PrimeIcons.APPLE,
      routerLink: 'alimentacion'
    },
    {
      label: 'Log Off',
      icon: PrimeIcons.POWER_OFF,
      command: () => this.salir()
    },
    

  ]
  }
  salir(){
    localStorage.removeItem('token');
    this.login.cerrarSesion();
    this.router.navigateByUrl("");
  }
}
