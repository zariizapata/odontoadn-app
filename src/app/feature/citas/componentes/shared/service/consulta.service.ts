import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Consulta } from '../model/consulta';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  private url: string = 'http://localhost:8080/api/odontologia';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(
    private http: HttpClient
  ) { }
  public getCitas(): Observable<Consulta[]> {
    return this.http.get(this.url).pipe(
      map(response => response as Consulta[])
    );
  }
  public getCitasPorId(id): Observable<Consulta> {
    return this.http.get<Consulta>(`${this.url}/${id}`);
  }

  create(cita: Consulta): Observable<Consulta> {
    console.log(this.http.post<Consulta>(`${this.url}`, cita, { headers: this.httpHeaders }));
    return this.http.post<Consulta>(`${this.url}`, cita, { headers: this.httpHeaders });
    
  }
  actualizar(cita: Consulta): Observable<Consulta> {
    console.log(this.http.post<Consulta>(`${this.url}`, cita, { headers: this.httpHeaders }));
    return this.http.post<Consulta>(`${this.url}`, cita, { headers: this.httpHeaders });
    
  }
}
