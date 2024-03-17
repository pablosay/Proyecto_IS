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
      usuario: ['', [Validators.required ]],
      pw: ['', [Validators.required, Validators.minLength(8)]]
    })

  }
  ngOnInit(): void {
  }
  intentarIngresar(){

    let usuario = String(this.form_inicio_sesion.controls['usuario'].value);
    let pw = String(this.form_inicio_sesion.controls['pw'].value);

    if(usuario == "nutritionist") {

      this.sesion.usuarioIngresado(usuario, "nutris")
      this.router.navigateByUrl("nutris/bienvenida")

    } else if (usuario == "client"){

      this.sesion.usuarioIngresado(usuario, "clientes")
      this.router.navigateByUrl("clientes/bienvenida")

    } else if(usuario == "manager") {

      this.sesion.usuarioIngresado(usuario, "admins")
      this.router.navigateByUrl("admins")

    } else {

      alert("Please enter a valud username")

    }
    

    /* this.backend.verificarDatosLogIn(tipo_usuario, usuario, pw).subscribe(datos_usuario => {
      
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
    */
    
  } 
}
