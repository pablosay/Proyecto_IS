import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionesAuxService {

  constructor() {

  }
  calcularEdad(cumple:string):number{
    var dia_i = Number(String(cumple).substring(8,10));
    var year_i = Number(String(cumple).substring(11,15));
    var fecha_actual = new Date();
    var dia_hoy = Number(fecha_actual.getDate());
    var mes_hoy = Number(fecha_actual.getMonth());
    var year_hoy = Number(fecha_actual.getFullYear());
    var mes_i = 0;
    switch(String(cumple).substring(4,7)){
      case "Jan": {
        mes_i = 1;
        break;
      }
      case "Feb": {
        mes_i = 2;
        break;
      }
      case "Mar": {
        mes_i = 3;
        break;
      }
      case "Apr": {
        mes_i = 4;
        break;
      }
      case "May": {
        mes_i = 5;
        break;
      }
      case "Jun": {
        mes_i = 6;
        break;
      }
      case "Jul": {
        mes_i = 7;
        break;
      }
      case "Aug": {
        mes_i = 8;
        break;
      }
      case "Sep": {
        mes_i = 9;
        break;
      }
      case "Oct": {
        mes_i = 10;
        break;
      }
      case "Nov": {
        mes_i = 11;
        break;
      }
      case "Dec": {
        mes_i = 12;
        break;
      }
    }

    var months = [31, 28, 31, 30, 31, 30, 31,31, 30, 31, 30, 31 ];

    if(dia_i > dia_hoy){
      dia_hoy = dia_hoy - months[mes_i];
      mes_hoy = mes_hoy - 1; 
    }

    if(mes_i > mes_hoy){
      year_hoy = year_hoy - 1;
      mes_hoy = mes_hoy + 12;
    }
    return year_hoy - year_i;
  }

  calcularCaloriasPorDia(sexo:string, factor_actividad:number, peso: number, altura:number, edad: number){
    if(sexo == "M"){
      return  (66 + (13.7 * peso)) + ((5 * altura) - (6.8 * edad))*factor_actividad;
    }
    return (655 + (9.6 * peso)) + ((1.8 * altura) - (4.7 * edad))*factor_actividad;
  }

  calcularIMC(peso:number, altura:number):number{
    return (peso/((altura/100)*(altura/100)));
  }
}
