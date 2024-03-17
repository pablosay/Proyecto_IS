import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MenuOpcionesSobrantes } from 'src/app/modelos/Objetos';
import { DataSharingService } from 'src/app/servicios/data-sharing.service';
import { ServicioBackendService } from 'src/app/servicios/servicio-backend.service';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';
@Component({
  selector: 'app-editar-menu',
  templateUrl: './editar-menu.component.html',
  styleUrls: ['./editar-menu.component.scss'],
  providers: [MessageService]
})
export class EditarMenuComponent implements OnInit {
  lista_dia: MenuOpcionesSobrantes[];
  form: FormGroup;
  dia:string;
  id: number;
  constructor(private fb:FormBuilder, private backend:ServicioBackendService, private data_sharing: DataSharingService, private data_user: ServicioLoginService, private router: Router, public messageService: MessageService) {
    this.lista_dia = [

      new MenuOpcionesSobrantes(1,  'Oatmeal', 'Turkey and apple gyro', 'Lettuce tacos'),
      new MenuOpcionesSobrantes(2,  'Oatmeal', 'Turkey and apple gyro', 'Lettuce tacos'),
      new MenuOpcionesSobrantes(3,  'Oatmeal', 'Turkey and apple gyro', 'Lettuce tacos'),
      new MenuOpcionesSobrantes(4,  'Oatmeal', 'Turkey and apple gyro', 'Lettuce tacos'),
      new MenuOpcionesSobrantes(5,  'Oatmeal', 'Turkey and apple gyro', 'Lettuce tacos'),
      new MenuOpcionesSobrantes(6,  'Oatmeal', 'Turkey and apple gyro', 'Lettuce tacos')

    ];
    this.dia = "";
    this.id = 0;
    this.form = this.fb.group({
      id: ["", Validators.required]
    });
    this.data_sharing.currentmenu.subscribe(menu => {
      this.dia = menu.dia;
      this.id = menu.id;
    });
  }
  ngOnInit(): void {
    /*
    this.backend.MenusNoSemanal(this.data_user.getUsuario()).subscribe(data => {
      console.log(data);
      this.lista_dia = data.menus;
    });
    */
  }
  actualizar(){

    this.messageService.add({severity:'success', summary: 'Correctly updated', detail:''});
    /*
    let cont = 0;
    for(let char of this.dia){
      if(char == ' '){
        this.dia = this.dia.substring(0, cont); 
        break;
      }
      cont++;
    }
    let menu = this.form.controls['id'].value;
    this.backend.actualizarMenu(this.data_user.getUsuario(), this.dia, menu).subscribe(data => {
      if(data.status == 1){
        this.messageService.add({severity:'success', summary: 'Correctly updated', detail:''});
      } else {
        this.messageService.add({severity:'success', summary: 'No se logro actualizar', detail:''});
      }
    });
    this.form.reset();
    */
  }
  regresar(){
    this.router.navigateByUrl("/clientes/alimentacion")
  }
}
