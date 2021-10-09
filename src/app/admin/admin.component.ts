import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MenuItem, PrimeIcons} from 'primeng/api';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  items: MenuItem[];

  constructor() {
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
      icon: PrimeIcons.POWER_OFF
    }]
  }

}
