import { Routes,RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ArticulorevistaComponent } from './articulorevista/articulorevista.component';
import { ComunicacioncongresoComponent } from './comunicacioncongreso/comunicacioncongreso.component';
import { LibroComponent } from './libro/libro.component';
import { CapitulolibroComponent } from './capitulolibro/capitulolibro.component';
import { ReportecientificoComponent } from './reportecientifico/reportecientifico.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import {RegistroComponent} from './registro/registro.component';
const appRoutes:Routes = [
    {path:'home', component: HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'registro',component:RegistroComponent},
    {path: 'articulorevista',component:ArticulorevistaComponent},
    {path: 'comunicacioncongreso',component:ComunicacioncongresoComponent},
    {path: 'libro',component:LibroComponent},
    {path: 'capitulolibro',component:CapitulolibroComponent},
    {path: 'reportecientifico',component:ReportecientificoComponent},
    {path: 'dashboard',component:DashboardComponent},
    {path:'contacto', component:ContactoComponent}
];
//forroot exporta de manera global para toda la aplicación
export const routing = RouterModule.forRoot(appRoutes);
