import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursosService } from '../../servicios/cursos.service';


@Component({
  selector: 'app-agregarcursos',
  templateUrl: './agregarcursos.component.html',
  styleUrls: ['./agregarcursos.component.css']
})
export class AgregarcursosComponent implements OnInit {
  cursoForm: FormGroup;
  curso: any;

  constructor(private pf: FormBuilder, private cursoService: CursosService) { }

  ngOnInit() {
    this.cursoForm = this.pf.group({
      curso: ['', Validators.required],
      materia: ['', Validators.required],
      profesor: ['', Validators.required],
      turno: ['', Validators.required],
      nivel: ['', Validators.required],
      fecha: ['', Validators.required]
    });
  }
  onSubmit() {
    this.curso = this.saveCurso();
    this.cursoService.postCurso( this.curso )
    .subscribe(newpres => {
    });
    this.cursoForm.reset();
  }

  saveCurso() {
  const saveCurso = {
    curso: this.cursoForm.get('curso').value,
    materia: this.cursoForm.get('materia').value,
    profesor: this.cursoForm.get('profesor').value,
    turno: this.cursoForm.get('turno').value,
    nivel: this.cursoForm.get('nivel').value,
    fecha: this.cursoForm.get('fecha').value,
  };
  return saveCurso;
  }


}
