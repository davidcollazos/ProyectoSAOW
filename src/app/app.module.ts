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
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { UserDomainService } from './services/user-domain.service';
import { RegistroComponent } from './registro/registro.component';
import { NewPublicacionComponent } from './new-publicacion/new-publicacion.component';
import { ModificarPublicacionComponent } from './modificar-publicacion/modificar-publicacion.component';

const appRoutes: Routes = [
  { path: '', redirectTo: './articulorevista', pathMatch: 'full' },
  { path: 'articulorevista', component: ArticulorevistaComponent },
  { path: 'new-publicacion', component: NewPublicacionComponent },
  { path: 'modificar-publicacion', component: ModificarPublicacionComponent }
];


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
    NewPublicacionComponent,
    ModificarPublicacionComponent,
 
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    routing,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [UserDomainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
