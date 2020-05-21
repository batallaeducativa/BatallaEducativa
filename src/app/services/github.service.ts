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
  private token="35f5db9f383385b665378e1dbfc77873f08dae6b";
  private  opts = {
    headers: new HttpHeaders({
      "Authorization": `Token ${this.token}`
    })
  };
  constructor(private http: HttpClient) { }

  //CLASES

  //va a recibir este metodo un nombre de clase
  getClases(modulo: String): Observable<any>{
    //return this.http.get(this.url + "clases\\"+ `${modulo}`);
    return this.http.get(this.url + "clases\\"+ `${modulo}`, this.opts);
  }
  
  getClase(modulo:string, clase:string): Observable<any>{
    //return this.http.get<any>(this.url + "clases\\"+ `${modulo}` + "\\" + `${clase}`);
    return this.http.get<any>(this.url + "clases\\"+ `${modulo}` + "\\" + `${clase}`, this.opts);
  }

  //EJES
  getEjesDiarios(modulo:string): Observable<any>{
    //return this.http.get(this.url + "ejes\\" + `${modulo}`);
    return this.http.get(this.url + "ejes\\"  + `${modulo}`, this.opts);
  }

  getEjeDiario(modulo:string, eje: string): Observable<any>{
    //return this.http.get<any>(this.url + "ejes\\" + `${modulo}` + "\\"+ `${eje}`);
    return this.http.get<any>(this.url + "ejes\\" + `${modulo}` + "\\"+ `${eje}`, this.opts);
  }

  getEjesMensuales(modulo:string): Observable<any>{
    //return this.http.get(this.url + "ejes\\" + `${modulo}`);
    return this.http.get(this.url + "ejes\\" + `${modulo}`, this.opts);
  }

  getEjeMensual(modulo:string, eje: string): Observable<any>{
    //return this.http.get<any>(this.url + "ejes\\" + `${modulo}` + "\\"+ `${eje}`);
    return this.http.get<any>(this.url + "ejes\\" + `${modulo}` + "\\"+ `${eje}`, this.opts);
  }
}
