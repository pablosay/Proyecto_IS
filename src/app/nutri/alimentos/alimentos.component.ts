import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ServicioBackendService } from 'src/app/servicios/servicio-backend.service';
@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.scss']
})
export class AlimentosComponent implements OnInit {
  form_ingreso_alimento: FormGroup;
  constructor(private fb: FormBuilder, private backend: ServicioBackendService) {

    this.form_ingreso_alimento = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      tipo: ['', [Validators.required]],
      cal: ['', [Validators.required, Validators.pattern('[0-9]{1,4}')]],
      prot: ['', [Validators.required, Validators.pattern('[0-9]{1,4}')]],
      carb: ['', [Validators.required, Validators.pattern('[0-9]{1,4}')]],
      grasa: ['', [Validators.required, Validators.pattern('[0-9]{1,4}')]]
    })
  }

  ngOnInit(): void {
  }
  registrar(){
    let nombre = this.form_ingreso_alimento.controls['nombre'].value;
    let tipo = this.form_ingreso_alimento.controls['tipo'].value;
    let cal:number = this.form_ingreso_alimento.controls['cal'].value;
    let prot:number = this.form_ingreso_alimento.controls['prot'].value;
    let carb:number = this.form_ingreso_alimento.controls['carb'].value;
    let grasa:number = this.form_ingreso_alimento.controls['grasa'].value;
    this.backend.IngresarAlimento(nombre,tipo,cal,prot,carb,grasa).subscribe(data => {
      if(data.status == 1){
        alert("Se ingreso correctamente");
      } else {
        alert("Ya existe el alimento");
      }
    })
  }
}
