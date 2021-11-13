import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Menu } from 'src/app/modelos/Objetos';
import {Message} from 'primeng//api';
import { ServicioBackendService } from 'src/app/servicios/servicio-backend.service';
import { MessageService } from 'primeng/api';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';

@Component({
  selector: 'app-menu-semanal',
  templateUrl: './menu-semanal.component.html',
  styleUrls: ['./menu-semanal.component.scss'],
  providers: [MessageService]
})
export class MenuSemanalComponent implements OnInit {
  usuario_seleccionado:boolean;
  form_usuario: FormGroup;
  form_menu: FormGroup;
  lista_lunes: Menu[]; 
  lista_martes: Menu[];
  lista_miercoles: Menu[];
  lista_jueves: Menu[];
  lista_viernes: Menu[];
  lista_sabado: Menu[];
  lista_domingo: Menu[];
  constructor(private fb: FormBuilder, private backend: ServicioBackendService, public messageService: MessageService, private data_user: ServicioLoginService) {
    this.usuario_seleccionado = false;
    this.lista_lunes = [], 
    this.lista_martes = [];
    this.lista_miercoles = [];
    this.lista_jueves = [];
    this.lista_viernes = [];
    this.lista_sabado = [];
    this.lista_domingo = [];
    this.form_usuario = this.fb.group({
      usuario: ["", [Validators.required, Validators.pattern('[C][1-9]{1,4}')]]
    });
    this.form_menu = this.fb.group({
      lun: ["", Validators.required],
      mar: ["", Validators.required],
      mier: ["", Validators.required],
      jue: ["", Validators.required],
      vie: ["", Validators.required],
      sab: ["", Validators.required],
      dom: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }
  buscar(){
    let usuario = this.form_usuario.controls['usuario'].value;
    //Verificar si es su cliente primero 
    var es_cliente = 0;
    this.backend.ListarClientes(this.data_user.getUsuario()).subscribe(response => {
      for(let cliente of response.clientes){
        if(cliente.usuario == usuario){
          es_cliente = 1;
        }
      }
      if(es_cliente == 1){
        this.backend.MenuSemanalCliente(this.data_user.getUsuario()).subscribe( response2 => {
          if(response2.menusemanal.length != 0){
            this.backend.ListarMenus(usuario).subscribe(data => {
              this.lista_lunes = data.menus;
              this.lista_martes = data.menus;
              this.lista_miercoles = data.menus;
              this.lista_jueves = data.menus;
              this.lista_viernes = data.menus;
              this.lista_sabado = data.menus;
              this.lista_domingo = data.menus;
            });
            this.usuario_seleccionado = true;
          } else {
            this.messageService.add({severity:'warn', summary: 'Ya tiene asignado un menu', detail:''});
            this.usuario_seleccionado = false;
          }
        });
        
      } else {
        this.messageService.add({severity:'error', summary: 'No tiene acceso a este cliente', detail:''});
        this.usuario_seleccionado = false;
      }   
    });
  }
  ingresar(){
    let usuario = this.form_usuario.controls['usuario'].value;
    let dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    let cont = 0;
    let error:Boolean = false;
    for(let menu in this.form_menu.controls){
      this.backend.ingresarMenuSemanal(usuario, dias[cont], this.form_menu.controls[menu].value).subscribe(data => {
        if(data.status == 0){
          error = true;
          this.messageService.add({severity:'error', summary: 'Error en dia ' + dias[cont], detail:''});
        }
      });
      cont++;
    }
    if(error != true){
      this.messageService.add({severity:'success', summary: 'Se ingreso correctamente', detail:''});
    }
    this.usuario_seleccionado = false;
    this.form_usuario.reset();
    this.form_menu.reset();
  }
}
