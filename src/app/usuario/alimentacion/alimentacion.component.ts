import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menuDia } from 'src/app/modelos/Objetos';
import { DataSharingService } from 'src/app/servicios/data-sharing.service';
import { ServicioBackendService } from 'src/app/servicios/servicio-backend.service';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';

@Component({
  selector: 'app-alimentacion',
  templateUrl: './alimentacion.component.html',
  styleUrls: ['./alimentacion.component.scss']
})
export class AlimentacionComponent implements OnInit {
  menu: menuDia[];
  constructor(private backend:ServicioBackendService, private data_user:ServicioLoginService, private data_sharing: DataSharingService, private router: Router) {
    this.menu = [];
  }

  ngOnInit(): void {
    this.backend.MenuSemanalCliente(this.data_user.getUsuario()).subscribe(data => {
      this.menu = data.menusemanal;
    });
  }
  editar(menu: menuDia){
    this.data_sharing.setMenu(menu);
    this.router.navigateByUrl('/clientes/editarmenu');
  }
}
