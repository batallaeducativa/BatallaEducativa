import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Clases } from '../models/clases';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  //public results: Observable<Clases>;
  public url: String = 'https://api.github.com/repos/batallaeducativa/batallaeducativa/contents/';
  private url_content: string = 'https://raw.githubusercontent.com/batallaeducativa/batallaeducativa/master/clases/';
  /*private token = "";
  private  opts = {
    headers: new HttpHeaders({
      "Authorization": `Token ${this.token}`
    })
  };*/
  //inyección de http
  constructor(private http: HttpClient) { }

  //CLASES

  //va a recibir este metodo un nombre de clase
  getClases(modulo: String): Observable<any>{
    return this.http.get(this.url + "clases\\"+ `${modulo}`);
  }
  
  getClase(modulo:string, clase:string): Observable<any>{
    return this.http.get<any>(this.url + "clases\\"+ `${modulo}` + "\\" + `${clase}`);
  }

  //EJES
  getEjesDiarios(): Observable<any>{
    return this.http.get(this.url + "ejes\\diario\\");
  }

  getEjeDiario(eje: string): Observable<any>{
    return this.http.get<any>(this.url + "ejes\\diario\\"+ `${eje}`);
  }
}
