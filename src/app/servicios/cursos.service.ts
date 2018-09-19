import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  presURL = 'https://escuela-9b4ae.firebaseio.com/cursos.json';
  preURL = 'https://escuela-9b4ae.firebaseio.com/cursos';

  constructor(private http: Http) { }

  postCurso( curso: any) {
    const newpres = JSON.stringify(curso);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.presURL, newpres, { headers }).pipe(map(res => {
      console.log(res.json());
      return res.json();
    }));
  }

  getCursos() {
    return this.http.get(this.presURL)
      .pipe(map(res => res.json()));
  }

  getCurso(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.get(url).pipe(map(res => res.json()));
  }

  putCurso(curso: any, id$: string) {
    const newpre = JSON.stringify(curso);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${this.preURL}/${id$}.json`;

    return this.http.put(url, newpre, { headers }).pipe(map(res => {
      console.log(res.json());
      return res.json();
    }));
  }

  delCurso(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.delete(url).pipe(map(res => res.json()));
  }


}
