import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursosService } from '../../servicios/cursos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editarcursos',
  templateUrl: './editarcursos.component.html',
  styleUrls: ['./editarcursos.component.css']
})
export class EditarcursosComponent implements OnInit {
  cursoForm: FormGroup;
  curso: any;
  materia: any;
  profesor: any;
  turno: any;
  nivel: any;
  fecha: any;

  id: string;

  constructor(private pf: FormBuilder,
    private cursoService: CursosService,
    private router: Router,
    private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params
      .subscribe(parametros => {
        this.id = parametros['id'];
        this.cursoService.getCurso(this.id)
          .subscribe(curso => this.curso = curso);
      });
    }

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
    this.cursoService.putCurso(this.curso, this.id)
      .subscribe(newpre => {
        this.router.navigate(['/cursos']);
      });
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

  eliminarCurso(id$) {
    this.cursoService.delCurso(id$)
      .subscribe(res => {
        console.log(res);
      });
  }


}
