import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/Objetos';
import { ServicioBackendService } from 'src/app/servicios/servicio-backend.service';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[];
  constructor(private backend: ServicioBackendService,private datos_usuario: ServicioLoginService) {
    this.clientes = [];
  }

  ngOnInit(): void {
    this.backend.ListarClientes(this.datos_usuario.getUsuario()).subscribe(datos => {
      for(let client of datos.clientes){
        if(client.sexo == "M"){
          client.sexo = "Masculino";
        } else {
          client.sexo = "Femenino";
        }
      }
      this.clientes = datos.clientes;
    });
  }

}
