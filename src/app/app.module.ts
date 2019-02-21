import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { routing } from "./app.routing";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ArticulorevistaComponent } from './articulorevista/articulorevista.component';
import { ComunicacioncongresoComponent } from './comunicacioncongreso/comunicacioncongreso.component';
import { LibroComponent } from './libro/libro.component';
import { CapitulolibroComponent } from './capitulolibro/capitulolibro.component';
import { ReportecientificoComponent } from './reportecientifico/reportecientifico.component';
import { DashboardComponent } from './dashboard/dashboard.component';



import { RegistroComponent } from './registro/registro.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    ContactoComponent,
    ArticulorevistaComponent,
    ComunicacioncongresoComponent,
    LibroComponent,
    CapitulolibroComponent,
    ReportecientificoComponent,
    DashboardComponent,
    RegistroComponent,
 
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    routing,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
