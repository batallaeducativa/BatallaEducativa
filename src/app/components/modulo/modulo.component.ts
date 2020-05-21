import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service'
import { Clases } from 'src/app/models/clases';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit {

  public itemsModulo;
  public modulo:string;
  public titulo:string;
  //public clasemodulo;

  constructor(private githubService: GithubService,
              private router: ActivatedRoute, private navigateRoute: Router) { 
    this.modulo = this.router.snapshot.paramMap.get('nombre');
  }

  ngOnInit() {
    this.itemsModulo = new Array();

    let i = 1;
    let nombre: string;

    console.log(this.modulo);
    switch(this.modulo){
      case "actividades":{
      this.titulo = "Actividades";
      this.githubService.getClases('actividades').subscribe(data => {
            data.forEach(item => {   
                if((item.name).includes(".htm"))
                {
                  this.githubService.getClase('actividades', item.name).subscribe(data => {
                    let nombreClase = data.name.split(".",2)[0];
                    this.itemsModulo.push(nombreClase);
                  });
                }            
            });
        });

        this.itemsModulo.sort(function (a, b) {
          return a.localeCompare(b);
        });
        break;
      }
      case "ejesdiario":{
        this.titulo = "Ejes Diarios";
        this.githubService.getEjesDiarios('ejesdiarios').subscribe(data => {
          data.forEach(item => {   
              if((item.name).includes(".htm"))
              {
                this.githubService.getEjeDiario('ejesdiarios', item.name).subscribe(data => {
                  let nombreEje = data.name.split(".",2)[0];
                  this.itemsModulo.push(nombreEje);
                });
              }            
          });
        }); 
        break;
      }
      case "ejesmensual":{
        this.titulo = "Ejes Mesuales";
        console.log(this.modulo);
        this.githubService.getEjesMensuales('ejesmensuales').subscribe(data => {
          console.log(data);
          data.forEach(item => {   
                this.githubService.getEjeMensual('ejesmensuales', item.name).subscribe(data => {
                  console.log(data);
                  let nombreEje = data.name.split(".",2)[0];
                  console.log(nombreEje);
                  this.itemsModulo.push(nombreEje);
                });
          });
        }); 
        break;
      }
    }
  }

  verItem(nombre: string){    
    this.navigateRoute.navigate([this.modulo, nombre + ".htm"]);
  }
}
