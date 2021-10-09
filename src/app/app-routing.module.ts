import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { IngresarNutriComponent } from './admin/ingresar-nutri/ingresar-nutri.component';
import { ListaNutrisComponent } from './admin/lista-nutris/lista-nutris.component';
import { InicioComponent } from './inicio/inicio.component';
import { NutriComponent } from './nutri/nutri.component';
import { UsuarioComponent } from './usuario/usuario.component';
const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: '', pathMatch: 'full', redirectTo: 'inicio'},
  {path: 'admins', component: AdminComponent,
    children: [
      {path:'ingresarNutri', component: IngresarNutriComponent},
      {path: 'listarNutris', component: ListaNutrisComponent}]},
  {path: 'clientes', component: UsuarioComponent},
  {path: 'nutris', component: NutriComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
