import {   NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { IngresarNutriComponent } from './admin/ingresar-nutri/ingresar-nutri.component';
import { ListaNutrisComponent } from './admin/lista-nutris/lista-nutris.component';
import { InicioComponent } from './inicio/inicio.component';
import { AlimentosComponent } from './nutri/alimentos/alimentos.component';
import { AsignarAlimentosComponent } from './nutri/asignar-alimentos/asignar-alimentos.component';
import { BienvenidaClienteComponent } from './nutri/bienvenida-cliente/bienvenida-cliente.component';
import { ClientesComponent } from './nutri/clientes/clientes.component';
import { ConsultaComponent } from './nutri/consulta/consulta.component';
import { DatosNutricionalesComponent } from './nutri/datos-nutricionales/datos-nutricionales.component';
import { IngresarClienteComponent } from './nutri/ingresar-cliente/ingresar-cliente.component';
import { ListaMenusComponent } from './nutri/lista-menus/lista-menus.component';
import { ListarAlimentosComponent } from './nutri/listar-alimentos/listar-alimentos.component';
import { ListarConsultasComponent } from './nutri/listar-consultas/listar-consultas.component';
import { MenuSemanalComponent } from './nutri/menu-semanal/menu-semanal.component';
import { NutriComponent } from './nutri/nutri.component';
import { PerfilComponent } from './nutri/perfil/perfil.component';
import { ActualizarDatosComponent } from './usuario/actualizar-datos/actualizar-datos.component';
import { AlimentacionComponent } from './usuario/alimentacion/alimentacion.component';
import { BienvenidaNutriComponent } from './usuario/bienvenida-nutri/bienvenida-nutri.component';
import { EditarMenuComponent } from './usuario/editar-menu/editar-menu.component';
import { PerfilcComponent } from './usuario/perfilc/perfilc.component';
import { ProgresoComponent } from './usuario/progreso/progreso.component';
import { UsuarioComponent } from './usuario/usuario.component';
const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: 'admins', component: AdminComponent,
    children: [
      {path:'ingresarNutri', component: IngresarNutriComponent},
      {path: 'listarNutris', component: ListaNutrisComponent}]},
  {path: 'clientes', component: UsuarioComponent,
    children: [
      {path: 'bienvenida', component: BienvenidaNutriComponent},
      {path: 'perfilCliente', component: PerfilcComponent},
      {path: 'alimentacion', component: AlimentacionComponent},
      {path: 'progreso', component: ProgresoComponent},
      {path: 'actualizarDatos', component: ActualizarDatosComponent},
      {path: 'editarmenu', component: EditarMenuComponent}
    ]
  },
  {path: 'nutris', component: NutriComponent,
    children: [
      {path: 'bienvenida', component: BienvenidaClienteComponent},
      {path: 'perfil', component: PerfilComponent},
      {path: 'clientes', component: ClientesComponent},
      {path: 'ingresarCliente', component: IngresarClienteComponent},
      {path: 'alimentos', component: AlimentosComponent},
      {path: 'consulta', component: ConsultaComponent},
      {path: 'listarAlimentos', component: ListarAlimentosComponent},
      {path: 'asignarAlimentos', component: AsignarAlimentosComponent}, 
      {path: 'listarconsultas', component: ListarConsultasComponent},
      {path: 'menuSemanal', component: MenuSemanalComponent},
      {path: 'datosnutricionales', component: DatosNutricionalesComponent},
      {path: 'listarMenus', component: ListaMenusComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
