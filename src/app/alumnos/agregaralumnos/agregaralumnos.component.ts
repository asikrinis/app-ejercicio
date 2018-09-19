import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agregaralumnos',
  templateUrl: './agregaralumnos.component.html',
  styleUrls: ['./agregaralumnos.component.css']
})
export class AgregaralumnosComponent implements OnInit {
  @ViewChild('formpro')formpro: NgForm;
  alumno: any;

  constructor() {
    this.alumno = {
      nombre: '',
      apellido: '',
      numerodecuenta: '',
      carrera: '',
      telefono: '',
      email: ''
    };
   }

  ngOnInit() {
  }

  onSubmit() {
    this.alumno.nombre = this.formpro.value.nombre;
    this.alumno.apellido = this.formpro.value.apellido;
    this.alumno.numerodecuenta = this.formpro.value.numerodecuenta;
    this.alumno.carrera = this.formpro.value.carrera;
    this.alumno.telefono = this.formpro.value.telefono;
    this.alumno.email = this.formpro.value.email;
    this.formpro.reset();
  }

}
