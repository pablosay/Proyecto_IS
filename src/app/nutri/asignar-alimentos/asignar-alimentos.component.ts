import { Component, OnInit } from '@angular/core';
import { ServicioBackendService } from 'src/app/servicios/servicio-backend.service';
import { Alimento } from 'src/app/modelos/Objetos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-asignar-alimentos',
  templateUrl: './asignar-alimentos.component.html',
  styleUrls: ['./asignar-alimentos.component.scss'],
  providers: [MessageService]
})
export class AsignarAlimentosComponent implements OnInit {
  form_menu: FormGroup;
  lista_desayunos: Alimento[];
  lista_almuerzos: Alimento[];
  lista_cenas: Alimento[];

  constructor(private backend: ServicioBackendService, private fb: FormBuilder, private router:Router, private data_user: ServicioLoginService, public messageService: MessageService) {
    this.lista_desayunos = [];
    this.lista_almuerzos = [];
    this.lista_cenas = [];

    this.form_menu = this.fb.group({
      usuario: ["", [Validators.required, Validators.pattern('[C][0-9]{1,4}')]],
      desayuno: ["", Validators.required],
      almuerzo: ["", Validators.required],
      cena: ["", Validators.required]
    })
  }

  ngOnInit(): void {

    this.backend.ListarAlimentoTipo('D').subscribe(data=> {
      this.lista_desayunos = data.alimentos;
    });

    this.backend.ListarAlimentoTipo('A').subscribe(data=> {
      this.lista_almuerzos = data.alimentos;
    });

    this.backend.ListarAlimentoTipo('C').subscribe(data => {
      this.lista_cenas = data.alimentos;
    });
  }
  registrar(){

    let cliente = this.form_menu.controls['usuario'].value;
    let desayuno = this.form_menu.controls['desayuno'].value;
    let almuerzo = this.form_menu.controls['almuerzo'].value;
    let cena = this.form_menu.controls['cena'].value;
    let cal_des:number = 0;
    let cal_alm: number = 0;
    let cal_cena: number = 0;

    for(let comida of this.lista_desayunos){
      if(comida.nombre == desayuno){
        cal_des = comida.calorias;
        console.log("des:"+cal_des);
      }
    }

    for(let comida of this.lista_almuerzos){
      if(comida.nombre == almuerzo){
        cal_alm = comida.calorias;
        console.log("a:"+cal_alm);
      }
    }

    for(let comida of this.lista_cenas){
      if(comida.nombre == cena){
        cal_cena = comida.calorias;
        console.log("cen:"+cal_cena);
      }
    }

    var cal_total = cal_alm + cal_cena + cal_des;
    console.log(cal_total);
    var total_calorias = 0;
    var es_cliente = 0;

    this.backend.ListarClientes(this.data_user.getUsuario()).subscribe(response => {

      for(let usuario of response.clientes){

        if(usuario.usuario == cliente){
          es_cliente = 1;
        }
      }

      if(es_cliente == 1){

        
        
        this.backend.DatosPorCliente(cliente).subscribe(data => {
          total_calorias = data.datos[0].calorias_dia;
          if(cal_total < total_calorias){
            this.backend.GuardarMenu(desayuno, almuerzo, cena, cliente).subscribe(data => {
              if(data.status == 1){
                this.messageService.add({severity:'success', summary: 'Se ingreso correctamente', detail:''});
              } else {
                this.form_menu.reset();
                this.backend.ListarAlimentoTipo('D').subscribe(data=> {
                  this.lista_desayunos = data.alimentos;
                });
                this.backend.ListarAlimentoTipo('A').subscribe(data=> {
                  this.lista_almuerzos = data.alimentos;
                });
                this.backend.ListarAlimentoTipo('C').subscribe(data => {
                  this.lista_cenas = data.alimentos;
                });
                this.messageService.add({severity:'error', summary: 'Error al ingresar', detail:''});
              }
            });
          } else {
            console.log(cal_total);
            this.messageService.add({severity:'error', summary: 'Sobrepasa las calorias', detail:''});
            this.form_menu.reset();
            this.backend.ListarAlimentoTipo('D').subscribe(data=> {
              this.lista_desayunos = data.alimentos;
            });
            this.backend.ListarAlimentoTipo('A').subscribe(data=> {
              this.lista_almuerzos = data.alimentos;
            });
            this.backend.ListarAlimentoTipo('C').subscribe(data => {
              this.lista_cenas = data.alimentos;
            });
          }
          cal_total = 0;
        });
      } else if(es_cliente == 0){
        this.messageService.add({severity:'error', summary: 'No tiene acceso a este cliente', detail:''});
      }   
    });
  }
}
