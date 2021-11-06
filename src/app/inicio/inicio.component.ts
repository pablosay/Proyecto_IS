import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validator, Validators } from '@angular/forms';
import { ServicioBackendService } from '../servicios/servicio-backend.service';
import { Router } from '@angular/router';
import { ServicioLoginService } from '../servicios/servicio-login.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  form_inicio_sesion: FormGroup;

  constructor(private sesion: ServicioLoginService ,private router: Router, private fb: FormBuilder, private backend: ServicioBackendService) {

    this.form_inicio_sesion = this.fb.group({
      usuario: ['', [Validators.required, Validators.maxLength(5) , Validators.pattern('(A|N|C)[1-9]{1,4}')]],
      pw: ['', Validators.required]
    })

  }
  ngOnInit(): void {
  }
  intentarIngresar(){

    let usuario = String(this.form_inicio_sesion.controls['usuario'].value);
    let pw = String(this.form_inicio_sesion.controls['pw'].value)
    let tipo_usuario = usuario.substring(0,1);

    if(tipo_usuario === "A"){
      tipo_usuario = "admins"
    } else if(tipo_usuario === "C"){
      tipo_usuario = "clientes"
    } else {
      tipo_usuario = "nutris"
    }

    this.backend.verificarDatosLogIn(tipo_usuario, usuario, pw).subscribe(datos_usuario => {
      
      if(datos_usuario.usuario.length == 0){
        alert("Usuario o contraseña incorrecto");
      } else {
        localStorage.setItem("token", datos_usuario.token);
        this.sesion.usuarioIngresado(usuario, tipo_usuario);
        if(tipo_usuario=="admins"){
          this.router.navigateByUrl(tipo_usuario);
        } else {
          this.router.navigateByUrl(tipo_usuario+ "/bienvenida");
        }
        
      }
      
    });
    
  } 
}
