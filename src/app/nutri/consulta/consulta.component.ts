import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuncionesAuxService } from 'src/app/servicios/funciones-aux.service';
import { ServicioBackendService } from 'src/app/servicios/servicio-backend.service';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  form_consulta: FormGroup;
  constructor(private backend: ServicioBackendService, private data_usuario: ServicioLoginService, private fb: FormBuilder, private funciones:FuncionesAuxService) {
    this.form_consulta = this.fb.group({
      usuario: ["", [Validators.required, Validators.pattern('(C)[1-9]{1,4}')]],
      sexo: ["", [Validators.required]],
      edad: ["", [Validators.required, Validators.pattern('[0-9]{1,2}')]],
      peso: ["", [Validators.required, Validators.pattern('[0-9]{1,3}')]],
      factor: ["", [Validators.required]],
      altura: ["", [Validators.required , Validators.pattern('[0-9]{1,3}')]],
      pectoral: ["", [Validators.required, Validators.pattern('[0-9]{1,3}')]],
      supracrestal: ["", [Validators.required, Validators.pattern('([0-9]{1,3}([.][0-9]{1})?|[.][0-9]{1})')]],
      subescapular: ["", [Validators.required, Validators.pattern('([0-9]{1,3}([.][0-9]{1})?|[.][0-9]{1})')]],
      supraespinal: ["", [Validators.required, Validators.pattern('([0-9]{1,3}([.][0-9]{1})?|[.][0-9]{1})')]],
      abdominal: ["", [Validators.required, Validators.pattern('[0-9]{1,3}')]],
      bicep: ["", [Validators.required, Validators.pattern('[0-9]{1,3}')]],
      tricep: ["", [Validators.required, Validators.pattern('[0-9]{1,3}')]],
      medial_pierna: ["", [Validators.required, Validators.pattern('([0-9]{1,3}([.][0-9]{1})?|[.][0-9]{1})')]],
      frontal_muslo: ["", [Validators.required, Validators.pattern('([0-9]{1,3}([.][0-9]{1})?|[.][0-9]{1})')]]
    })
  }
  ngOnInit(): void {
  }
  registrar(){
    let cliente:string = this.form_consulta.controls['usuario'].value;
    let peso:number = this.form_consulta.controls['peso'].value;
    let altura:number = this.form_consulta.controls['altura'].value;
    let factor:number = this.form_consulta.controls['factor'].value;
    let sexo = this.form_consulta.controls['sexo'].value;
    let edad:number = this.form_consulta.controls['edad'].value;
    //Calculos
    let calorias_dia = Math.trunc(this.funciones.calcularCaloriasPorDia(sexo, factor,peso,altura,edad));
    let imc = parseFloat((Math.round(this.funciones.calcularIMC(peso, altura) * 10) / 10).toFixed(1));
    //mediciones torso
    let pectoral:number = this.form_consulta.controls['pectoral'].value;
    let supracrestal:number = this.form_consulta.controls['supracrestal'].value;
    let subescapular:number = this.form_consulta.controls['subescapular'].value;
    let supraespinal:number =  this.form_consulta.controls['supraespinal'].value;
    let abdominal:number = this.form_consulta.controls['abdominal'].value;
    //mediciones brazo
    let biceps: number = this.form_consulta.controls['bicep'].value;
    let tricep:number = this.form_consulta.controls['tricep'].value
    //Mediciones piernas
    let medial_pierna:number = this.form_consulta.controls['medial_pierna'].value;
    let frontal_muslo:number = this.form_consulta.controls['frontal_muslo'].value;

    this.backend.NuevaConsulta(calorias_dia, imc, peso, altura, tricep, pectoral, supracrestal, subescapular, biceps, medial_pierna, frontal_muslo, abdominal, supraespinal, cliente, this.data_usuario.getUsuario()).subscribe(response => {
      this.backend.ActualizarDatosNutricionales(calorias_dia, imc, peso, altura, cliente).subscribe(response2 => {
        if(response.status == 1 && response2.status == 1){
          alert("Se ingreso correctamente");
        } else {
          alert("Error");
        }
      })
    });
    this.form_consulta.reset();
  }
}
