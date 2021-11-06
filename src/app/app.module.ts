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
import { CalendarModule } from 'primeng/calendar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ListarAlimentosComponent } from './nutri/listar-alimentos/listar-alimentos.component';
import {TableModule} from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { AsignarAlimentosComponent } from './nutri/asignar-alimentos/asignar-alimentos.component';
import {FieldsetModule} from 'primeng/fieldset';
import {DropdownModule} from 'primeng/dropdown';
import { ListarConsultasComponent } from './nutri/listar-consultas/listar-consultas.component';
import { MenuSemanalComponent } from './nutri/menu-semanal/menu-semanal.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { DatosNutricionalesComponent } from './nutri/datos-nutricionales/datos-nutricionales.component';
import { ListaMenusComponent } from './nutri/lista-menus/lista-menus.component';
import { AlimentacionComponent } from './usuario/alimentacion/alimentacion.component';
import { PerfilcComponent } from './usuario/perfilc/perfilc.component';
import { ProgresoComponent } from './usuario/progreso/progreso.component';
import {CardModule} from 'primeng/card';
import {RippleModule} from 'primeng/ripple';
import { ActualizarDatosComponent } from './usuario/actualizar-datos/actualizar-datos.component';
import {ChartModule} from 'primeng/chart';
import { EditarMenuComponent } from './usuario/editar-menu/editar-menu.component';
import { BienvenidaClienteComponent } from './nutri/bienvenida-cliente/bienvenida-cliente.component';
import { BienvenidaNutriComponent } from './usuario/bienvenida-nutri/bienvenida-nutri.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
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
    IngresarClienteComponent,
    ListarAlimentosComponent,
    AsignarAlimentosComponent,
    ListarConsultasComponent,
    MenuSemanalComponent,
    DatosNutricionalesComponent,
    ListaMenusComponent,
    AlimentacionComponent,
    PerfilcComponent,
    ProgresoComponent,
    ActualizarDatosComponent,
    EditarMenuComponent,
    BienvenidaClienteComponent,
    BienvenidaNutriComponent
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
    NoopAnimationsModule,
    RadioButtonModule,
    TableModule,
    TagModule,
    FieldsetModule,
    DropdownModule,
    MessageModule,
    MessagesModule,
    CardModule,
    RippleModule,
    ChartModule
  ],
  providers: [MessageModule, MessagesModule, JwtHelperService, {provide: JWT_OPTIONS, useValue: JWT_OPTIONS}],
  bootstrap: [AppComponent]
})
export class AppModule { }
