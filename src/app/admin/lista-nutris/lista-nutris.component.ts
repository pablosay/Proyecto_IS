import { Component, OnInit } from '@angular/core';
import { Nutricionista } from 'src/app/modelos/Objetos';
import { ServicioBackendService } from 'src/app/servicios/servicio-backend.service';

@Component({
  selector: 'app-lista-nutris',
  templateUrl: './lista-nutris.component.html',
  styleUrls: ['./lista-nutris.component.scss']
})
export class ListaNutrisComponent implements OnInit {
  nutris: Nutricionista[];
  constructor(private backend: ServicioBackendService) {
    this.nutris = [];
  }

  ngOnInit(): void {
    this.backend.ListarNutricionistas().subscribe(data => {
      this.nutris = data.nutris;
    })
  }

}
