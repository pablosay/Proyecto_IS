import { Component, OnInit, ViewChild } from '@angular/core';
import { Alimento } from 'src/app/modelos/Objetos'; 
import { ServicioBackendService } from 'src/app/servicios/servicio-backend.service';

import { Table } from 'primeng/table';
@Component({
  selector: 'app-listar-alimentos',
  templateUrl: './listar-alimentos.component.html',
  styleUrls: ['./listar-alimentos.component.scss']
})
export class ListarAlimentosComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  alimentos: Alimento[];
  constructor(private backend: ServicioBackendService) {
    this.alimentos = [];
  }
  
  ngOnInit(): void {
    this.backend.ListarAlimento().subscribe(data =>{
      if(data.status == 1){
        this.alimentos = data.alimentos;
      } else {
        alert("Algo fallo");
      }
    });
  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt?.filterGlobal(($event.target as HTMLInputElement).value, 'contains'); 
  }
  clear(table: Table) {
    table.clear();
  }

}
