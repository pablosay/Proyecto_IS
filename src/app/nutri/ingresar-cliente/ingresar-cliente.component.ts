import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { ServicioBackendService } from 'src/app/servicios/servicio-backend.service';
import { FuncionesAuxService } from 'src/app/servicios/funciones-aux.service';
@Component({
  selector: 'app-ingresar-cliente',
  templateUrl: './ingresar-cliente.component.html',
  styleUrls: ['./ingresar-cliente.component.scss']
})
export class IngresarClienteComponent implements OnInit {

  form_ingreso_cliente: FormGroup;

  constructor(private fb: FormBuilder, private backend: ServicioBackendService, 
    private funcionesaux: FuncionesAuxService) {

    this.form_ingreso_cliente = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      fecha: ['', Validators.required],
      telefono: ['', Validators.required],
      pw1: ['', Validators.required],
      pw2: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }
  
  registrar(){
    alert(this.funcionesaux.calcularEdad(this.form_ingreso_cliente.controls['fecha'].value));
  }

}
