import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlumnosService } from './servicios/alumnos.service';
import { AlumnosComponent } from './alumnos/alumnos/alumnos.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AgregaralumnosComponent } from './alumnos/agregaralumnos/agregaralumnos.component';
import { AgregarcursosComponent } from './cursos/agregarcursos/agregarcursos.component';
import { CursosService } from './servicios/cursos.service';
import { CursosComponent } from './cursos/cursos/cursos.component';
import { EditarcursosComponent } from './cursos/editarcursos/editarcursos.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'agregaralumnos', component: AgregaralumnosComponent},
  {path: 'agregarcursos', component: AgregarcursosComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'editarcurso/:id', component: EditarcursosComponent},
  {path: '**', component: InicioComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    InicioComponent,
    HeaderComponent,
    AgregaralumnosComponent,
    AgregarcursosComponent,
    CursosComponent,
    EditarcursosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [AlumnosService, CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
