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
    this.menu = [
      new menuDia('Monday', 1, 'Oatmeal', 'Turkey and apple gyro', 'Lettuce tacos'),
      new menuDia('Tuesday', 2, 'Oatmeal', 'Turkey and apple gyro', 'Lettuce tacos'),
      new menuDia('Wednesday', 3, 'Oatmeal', 'Turkey and apple gyro', 'Lettuce tacos'),
      new menuDia('Thursday', 4, 'Oatmeal', 'Turkey and apple gyro', 'Lettuce tacos'),
      new menuDia('Friday', 5, 'Oatmeal', 'Turkey and apple gyro', 'Lettuce tacos'),
      new menuDia('Saturday', 6, 'Oatmeal', 'Turkey and apple gyro', 'Lettuce tacos'),
      new menuDia('Sunday', 7, 'Oatmeal', 'Turkey and apple gyro', 'Lettuce tacos')
    ];
  }

  ngOnInit(): void {
    /*this.backend.MenuSemanalCliente(this.data_user.getUsuario()).subscribe(data => {
      this.menu = data.menusemanal;
    });
    */
  }
  editar(menu: menuDia){
    this.data_sharing.setMenu(menu);
    this.router.navigateByUrl('/clientes/editarmenu');
  }
}
