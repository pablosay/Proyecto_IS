import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { DividerModule} from 'primeng/divider';
import { ButtonModule} from 'primeng/button';
import { InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './usuario/usuario.component';
import { AdminComponent } from './admin/admin.component';
import { NutriComponent } from './nutri/nutri.component';
import { MenubarModule } from 'primeng/menubar';
import { ListaNutrisComponent } from './admin/lista-nutris/lista-nutris.component';
import { IngresarNutriComponent } from './admin/ingresar-nutri/ingresar-nutri.component';
import { PasswordModule} from 'primeng/password';
import { InputMaskModule} from 'primeng/inputmask';
import { InputTextareaModule} from 'primeng/inputtextarea';
import { ScrollPanelModule} from 'primeng/scrollpanel';
import { PerfilComponent } from './nutri/perfil/perfil.component';
import { ClientesComponent } from './nutri/clientes/clientes.component';
import { AlimentosComponent } from './nutri/alimentos/alimentos.component';
import { ConsultaComponent } from './nutri/consulta/consulta.component';
import { IngresarClienteComponent } from './nutri/ingresar-cliente/ingresar-cliente.component';
import {CalendarModule} from 'primeng/calendar';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UsuarioComponent,
    AdminComponent,
    NutriComponent,
    ListaNutrisComponent,
    IngresarNutriComponent,
    PerfilComponent,
    ClientesComponent,
    AlimentosComponent,
    ConsultaComponent,
    IngresarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DividerModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    HttpClientModule, 
    MenubarModule,
    PasswordModule,
    InputMaskModule,
    InputTextareaModule,
    ScrollPanelModule,
    CalendarModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
