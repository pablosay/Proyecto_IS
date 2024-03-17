import { Component, OnInit, ViewChild} from '@angular/core';
import { ServicioBackendService } from 'src/app/servicios/servicio-backend.service';
import { ServicioLoginService } from 'src/app/servicios/servicio-login.service';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.scss'],
})
export class ProgresoComponent implements OnInit {
  calorias:number [];
  fecha: string[];
  options: any;
  data_peso: any;
  data_altura: any;
  data_imc: any;
  data_calorias: any;
  data_tricep: any;
  data_bicep: any;

  constructor(private backend: ServicioBackendService, private data_user: ServicioLoginService) {
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
    this.fecha = ['12/12/2022', '11/11/2022', '10/10/2022', '09/09/2022']; 

    this.calorias = [2000, 2200, 1800, 1300]; 

    /*this.grafica_extremidades = {
      datasets: [
        {
        data: [
          [31.5, 45.32, 54.3, 40.2],
          [32.1, 46.2, 55.1, 41.0],
          [30.8, 44.7, 53.9, 39.5],
          [33.0, 48.0, 57.0, 42.5]],
        backgroundColor: [
            "#42A5F5",
            "#66BB6A",
            "#FFA726",
            "#26C6DA"
        ],
        label: 'Datos extremidades'
        }
      ],
    labels: [
        "Tricep (cm)",
        "Bicep (cm)",
        "Frontal Muslo (cm)",
        "Medial pierna (cm)"
    ]
    }*/

    this.data_altura = {
      labels: this.fecha,
      datasets: [
        {
          label: 'Datos de altura (cm)',
          data: [170, 172, 168, 165],
          borderColor: '#78F784',
          tension: .4,
          backgroundColor: '#78F784',
        }
      ]
    }

    

    this.data_peso = {
      labels: this.fecha,
      datasets: [
        {
          label: 'Datos de peso (kg)',
          data: [70, 72, 69, 68],
          borderColor: '#78EAF7',
          tension: .4,
          backgroundColor: '#78EAF7',
        }
      ]
    }

    this.data_imc = {
      labels: this.fecha,
      datasets: [
        {
          label: 'Datos de IMC',
          data: [24.2, 24.4, 24.8, 25.1],
          borderColor: '#F82020',
          tension: .4,
          backgroundColor: '#F82020'
        }
      ]
    }

    this.data_calorias = {
      labels: this.fecha,
      datasets: [
        {
          label: 'Datos de IMC',
          data: [24.2, 24.4, 24.8, 25.1],
          borderColor: '#F82020',
          tension: .4,
          backgroundColor: '#F82020'
        }
      ]
    }


    this.data_tricep = {
      labels: this.fecha,
      datasets: [
        {
          label: 'Datos de calorias necesarias (Kcal)',
          data: [2000, 2200, 1800, 1300],
          borderColor: '#FFB74D',
          tension: .4,
          backgroundColor: '#FFB74D',
        }
      ]
    }

    /*this.grafica_torso = {
      datasets: [{
        data: [[85, 98, 12, 15, 11],[86, 99, 11.5, 14.5, 10.8],[84, 97, 12.2, 15.2, 11.3],[87, 100, 12.5, 15.0, 11.7]
      ],
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
        "Subescapular (cm)",
        "Supracrestal (cm)",
        "Supraespinal (cm)"
      ]
    }*/
    
  }

  ngOnInit(): void {

    /** 

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

    */
  
  
  
  }
}
