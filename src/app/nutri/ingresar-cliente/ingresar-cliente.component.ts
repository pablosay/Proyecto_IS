import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { ServicioBackendService } from 'src/app/servicios/servicio-backend.service';
import { FuncionesAuxService } from 'src/app/servicios/funciones-aux.service';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';
@Component({
  selector: 'app-ingresar-cliente',
  templateUrl: './ingresar-cliente.component.html',
  styleUrls: ['./ingresar-cliente.component.scss']
})
export class IngresarClienteComponent implements OnInit {

  form_ingreso_cliente: FormGroup;

  constructor(private fb: FormBuilder, private backend: ServicioBackendService, 
    private funcionesaux: FuncionesAuxService, private data: ServicioLoginService) {

    this.form_ingreso_cliente = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      telefono: ['', Validators.required],
      sexo: ['', Validators.required],
      pw1: ['', Validators.required],
      pw2: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  
  registrar(){
    let pw1:string = this.form_ingreso_cliente.controls['pw1'].value;
    let pw2:string = this.form_ingreso_cliente.controls['pw2'].value;
    if(pw1 != pw2){
      alert("Las contraseñas no coinciden");
    } else {
      let sexo = this.form_ingreso_cliente.controls['sexo'].value;
      let telefono = this.form_ingreso_cliente.controls['telefono'].value;
      let nombre = this.form_ingreso_cliente.controls['nombre'].value;
      this.backend.IngresarCliente(pw1, sexo, telefono, nombre, this.data.getUsuario()).subscribe(response => {
        if(response.status == 1){
          alert("Se registro correctamente");
          
        } else {
          alert("Error en la base de datos");
        }
      });
    }
  }

}

