import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { ServicioBackendService } from 'src/app/servicios/servicio-backend.service';
@Component({
  selector: 'app-ingresar-nutri',
  templateUrl: './ingresar-nutri.component.html',
  styleUrls: ['./ingresar-nutri.component.scss']
})
export class IngresarNutriComponent implements OnInit {

  form_registro_nutri: FormGroup;

  constructor(private fb: FormBuilder, private backend: ServicioBackendService) {
    
    this.form_registro_nutri = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      colegiado: ['', [Validators.required, Validators.pattern('[1-9]{4}')]],
      telefono: ['', Validators.required],
      descripcion: ['', Validators.maxLength(255)],
      pw1: ['', Validators.required],
      pw2: ['', Validators.required]
    });

  }

  ngOnInit(): void {
  }
  registrar(){
    if(!(this.form_registro_nutri.controls['pw1'].value === this.form_registro_nutri.controls['pw2'].value)){
      alert("Las contraseñas no son iguales");
    } else {
      let nombre:string = this.form_registro_nutri.controls['nombre'].value;
      let colegiado:number = this.form_registro_nutri.controls['colegiado'].value;
      let telefono:string = this.form_registro_nutri.controls['telefono'].value;
      let des:string = this.form_registro_nutri.controls['descripcion'].value;
      let pw:string = this.form_registro_nutri.controls['pw1'].value;
      this.backend.IngresarNutri(nombre, colegiado, telefono, des,pw).subscribe(response =>{
        if(response.status === 1){
          alert("Se ingreso correctamente");
          this.form_registro_nutri.reset();
        } 
      });
    }
  }
}
