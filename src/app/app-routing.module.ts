import {   NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { IngresarNutriComponent } from './admin/ingresar-nutri/ingresar-nutri.component';
import { ListaNutrisComponent } from './admin/lista-nutris/lista-nutris.component';
import { AuthGuard } from './guards/auth.guard';
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
      {path:'ingresarNutri', component: IngresarNutriComponent, canActivate: [AuthGuard]}, 
      {path: 'listarNutris', component: ListaNutrisComponent}], canActivate: [AuthGuard]},
  {path: 'clientes', component: UsuarioComponent,
    children: [
      {path: 'bienvenida', component: BienvenidaNutriComponent, canActivate: [AuthGuard]},
      {path: 'perfilCliente', component: PerfilcComponent, canActivate: [AuthGuard]},
      {path: 'alimentacion', component: AlimentacionComponent, canActivate: [AuthGuard]},
      {path: 'progreso', component: ProgresoComponent, canActivate: [AuthGuard]},
      {path: 'actualizarDatos', component: ActualizarDatosComponent, canActivate: [AuthGuard]},
      {path: 'editarmenu', component: EditarMenuComponent, canActivate: [AuthGuard]}
    ], canActivate: [AuthGuard]
  },
  {path: 'nutris', component: NutriComponent,
    children: [
      {path: 'bienvenida', component: BienvenidaClienteComponent, canActivate: [AuthGuard]},
      {path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard]},
      {path: 'clientes', component: ClientesComponent, canActivate: [AuthGuard]},
      {path: 'ingresarCliente', component: IngresarClienteComponent, canActivate: [AuthGuard]},
      {path: 'alimentos', component: AlimentosComponent, canActivate: [AuthGuard]},
      {path: 'consulta', component: ConsultaComponent, canActivate: [AuthGuard]},
      {path: 'listarAlimentos', component: ListarAlimentosComponent, canActivate: [AuthGuard]},
      {path: 'asignarAlimentos', component: AsignarAlimentosComponent, canActivate: [AuthGuard]}, 
      {path: 'listarconsultas', component: ListarConsultasComponent, canActivate: [AuthGuard]},
      {path: 'menuSemanal', component: MenuSemanalComponent, canActivate: [AuthGuard]},
      {path: 'datosnutricionales', component: DatosNutricionalesComponent, canActivate: [AuthGuard]},
      {path: 'listarMenus', component: ListaMenusComponent, canActivate: [AuthGuard]}
    ] , canActivate: [AuthGuard]
  }
]
//
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
