import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicioBackendService } from 'src/app/servicios/servicio-backend.service';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';
import { FuncionesAuxService } from 'src/app/servicios/funciones-aux.service';
import { MessageService } from 'primeng/api';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-actualizar-datos',
  templateUrl: './actualizar-datos.component.html',
  styleUrls: ['./actualizar-datos.component.scss'],
  providers: [MessageService]
})
export class ActualizarDatosComponent implements OnInit {
  form: FormGroup;
  sexo: string;
  constructor(private backend:ServicioBackendService, private data_user:ServicioLoginService, private fb:FormBuilder, private funciones:FuncionesAuxService, public messageService:MessageService) {
    
    this.sexo = "";

    this.form = this.fb.group({

      edad: ["", [Validators.required, Validators.pattern('[0-9]{1,2}')]],
      
      peso: ["", [Validators.required, Validators.pattern('[0-9]{1,3}')]],
      
      factor: ["", [Validators.required]],
      
      altura: ["", [Validators.required , Validators.pattern('[0-9]{1,3}')]]
      
    });
  }

  ngOnInit(): void {

  }
  actualizar(){
    let peso:number = this.form.controls['peso'].value;

    let altura:number = this.form.controls['altura'].value;

    let factor:number = this.form.controls['factor'].value;

    let edad:number = this.form.controls['edad'].value;

    this.backend.perfilCliente(this.data_user.getUsuario()).subscribe(data => {

      this.sexo = data.perfil[0].sexo;

      let calorias_dia = Math.trunc(this.funciones.calcularCaloriasPorDia(this.sexo, factor,peso,altura,edad));

      let imc = parseFloat((Math.round(this.funciones.calcularIMC(peso, altura) * 10) / 10).toFixed(1));

      this.backend.ActualizarDatosCliente(calorias_dia, imc, peso, altura, this.data_user.getUsuario()).subscribe(data2 => {

        if(data2.status == 1) {

          this.messageService.add({severity:'success', summary: 'Se ingreso correctamente', detail:''});

        } else {

          this.messageService.add({severity:'error', summary: 'Error en la base de datos', detail:''});

        }

      });

    });

    this.form.reset();
  }

}
