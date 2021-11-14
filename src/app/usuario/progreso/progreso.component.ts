import { Component, OnInit, ViewChild} from '@angular/core';
import { ServicioBackendService } from 'src/app/servicios/servicio-backend.service';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.scss'],
})
export class ProgresoComponent implements OnInit {
  peso:number [];
  altura:number [];
  calorias:number [];
  imc:number [];
  fecha: string[];
  options: any;
  options2: any;
  data_peso: any;
  data_altura: any;
  data_imc: any;
  datos_extremidades: number[];
  datos_torso: number[];
  grafica_extremidades: any;
  grafica_torso: any;
  constructor(private backend: ServicioBackendService, private data_user: ServicioLoginService) {
    this.fecha = [];
    this.peso = [];
    this.altura = [];
    this.calorias = [];
    this.imc = [];
    this.datos_extremidades = [];
    this.datos_torso = [];
  }

  ngOnInit(): void {
    this.backend.listaDatosCliente(this.data_user.getUsuario()).subscribe(data => {

      for(let datos of data.datos){
        this.fecha.push(datos.fecha.substring(0,10));
        this.peso.push(datos.peso);
        this.altura.push(datos.altura);
        this.calorias.push(datos.calorias_dia);
        this.imc.push(datos.imc);
      }

      this.data_peso = {
        labels: this.fecha,
        datasets: [
          {
            label: 'Datos de peso (kg)',
            data: this.peso,
            fill: true,
            borderColor: '#78EAF7',
            tension: .4,
            backgroundColor: 'rgba(120,234,247,0.2)',
          }
        ]
      }

      this.data_altura = {
        labels: this.fecha,
        datasets: [
          {
            label: 'Datos de altura (cm)',
            data: this.altura,
            fill: true,
            borderColor: '#78F784',
            tension: .4,
            backgroundColor: 'rgba(120,247,132,0.2)',
          }
        ]
      }

      this.data_imc = {
        labels: this.fecha,
        datasets: [
          {
            label: 'Datos de IMC',
            data: this.imc,
            fill: true,
            borderColor: '#F82020',
            tension: .4,
            backgroundColor: 'rgba(248,32,32,0.2)'
          }
        ]
      }

      this.options = {
        plugins: {
          legend: {
              labels: {
                  color: '#ebedef'
              }
          }
        },
        scales: {
          x: {
              ticks: {
                  color: '#ebedef'
              },
              grid: {
                  color: 'rgba(255,255,255,0.2)'
              }
          },
          y: {
              ticks: {
                  color: '#ebedef'
              },
              grid: {
                  color: 'rgba(255,255,255,0.2)'
              }
          }
        }
      }
      
    });

    this.backend.DatosBrazosCliente(this.data_user.getUsuario()).subscribe(data1 => {
      for(let brazo of data1.datos){
        this.datos_extremidades.push(brazo.tricep);
        this.datos_extremidades.push(brazo.biceps);
      }
      this.backend.DatosPiernaCliente(this.data_user.getUsuario()).subscribe(data2 => {
        for(let pierna of data2.datos){
          this.datos_extremidades.push(Number(pierna.frontal_muslo));
          this.datos_extremidades.push(Number(pierna.medial_pierna));
        }
        this.backend.DatosTorsoCliente(this.data_user.getUsuario()).subscribe(data3 => {
          for(let torso of data3.datos){
            this.datos_torso.push(torso.abdominal);
            this.datos_torso.push(torso.pectoral);
            this.datos_torso.push(Number(torso.subescapular));
            this.datos_torso.push(Number(torso.supracrestal));
            this.datos_torso.push(Number(torso.supraespinal));
          }
          console.log(this.datos_extremidades)
          this.grafica_extremidades = {
            datasets: [{
              data: this.datos_extremidades,
              backgroundColor: [
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726",
                  "#26C6DA"
              ],
              label: 'Datos extremidades'
          }],
          labels: [
              "Tricep (cm)",
              "Bicep (cm)",
              "Frontal Muslo (mm)",
              "Medial pierna (cm)"
          ]
          }

          this.grafica_torso = {
            datasets: [{
              data: this.datos_torso,
              backgroundColor: [
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726",
                  "#26C6DA",
                  "#7E57C2"
              ],
              label: 'Datos torso'
            }],
            labels: [
              "Abdominal (cm)",
              "Pectoral (cm)",
              "Subescapular (mm)",
              "Supracrestal (mm)",
              "Supraespinal (mm)"
            ]
          }
          this.options2 = {
            plugins: {
              legend: {
                labels: {
                    color: '#ebedef'
                }
              }
            },
            scales: {
              r: {
                grid: {
                  color: 'rgba(255,255,255,0.2)'
                }
              }
            }
          }

        });
      });
    });
  }
}
