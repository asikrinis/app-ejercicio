import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../servicios/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styles: []
})
export class AlumnosComponent implements OnInit {
  alumnos: any;

  constructor(private alumnosService: AlumnosService) { }

  ngOnInit() {
    this.alumnos = this.alumnosService.getAlumnos();
  }

}
