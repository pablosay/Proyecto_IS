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
    this.items = [{
      label: 'Perfil',
      icon: PrimeIcons.ID_CARD,
      routerLink: 'perfilCliente'
    },  
    {
      label: 'Progreso',
      icon: PrimeIcons.USERS,
      items: [
        {
          label: 'Actualizar datos nutricionales',
          icon: PrimeIcons.CHECK,
          routerLink: 'actualizarDatos'
        },{
          label: 'Estadistica',
          icon: PrimeIcons.CHART_LINE,
          routerLink: 'progreso' 
        }
      ]
    },
    {
      label: 'Alimentos',
      icon: PrimeIcons.APPLE,
      routerLink: 'alimentacion'
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
