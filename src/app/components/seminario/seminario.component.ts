import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service'
import { Clases } from 'src/app/models/clases';
import { catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seminario',
  templateUrl: './seminario.component.html',
  styleUrls: ['./seminario.component.css']
})
export class SeminarioComponent implements OnInit {

  public nombreClasesSeminario;
  public clase = new Clases();
  public claseSeminario;

  constructor(private githubService: GithubService,
              private router: Router) { 
  }

  ngOnInit() {
    this.nombreClasesSeminario = new Array();
    this.claseSeminario = new Array();
    let i = 1;
    let nombre: string;

    this.githubService.getClases('inicioBrigada').subscribe(data => {
        data.forEach(item => {   
            if((item.name).includes(".htm"))
            {
              this.githubService.getClase('inicioBrigada', item.name).subscribe(data => {
                let nombreClase = data.name.split(".",2)[0];
                console.log(nombreClase);
                this.claseSeminario.push(nombreClase);
              });
            }            
        });
    });

    this.claseSeminario.sort(function (a, b) {
      return a.localeCompare(b);
    });
  }

  verClase(nombre: string){
    this.router.navigate(['\clases',nombre + ".html"]);
  }
}
