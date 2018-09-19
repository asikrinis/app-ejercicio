import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor() { }
  alumnos: any = [
    {
    nombre: 'Juan',
    apellido: 'Garcia',
    numerodecuenta: 15241152,
    carrera: 'Ingenieria en Sistemas',
    telefono: 55555555,
    email: 'juangarcia@gmail.com'
    },
    {
      nombre: 'Alejandra',
      apellido: 'Rodriguez',
      numerodecuenta: 15871154,
      carrera: 'Ingenieria en Sistemas',
      telefono: 58585858,
      email: 'alero@gmail.com'
    },
  ];
  getAlumnos() {
    return this.alumnos;
  }
}
