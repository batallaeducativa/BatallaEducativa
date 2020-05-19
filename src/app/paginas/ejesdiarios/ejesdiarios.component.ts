import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
import { GithubService } from '../../services/github.service'


@Component({
  selector: 'app-ejesdiarios',
  templateUrl: './ejesdiarios.component.html',
  styleUrls: ['./ejesdiarios.component.css']
})

export class EjesdiariosComponent implements OnInit {

  public ejesDiarios;

  constructor(private githubService: GithubService,
    private router: Router) { 
  }

  ngOnInit() {
  this.ejesDiarios = new Array();
  //this.claseSeminario = new Array();
  let i = 1;
  let nombre: string;

  this.githubService.getEjesDiarios().subscribe(data => {
    data.forEach(item => {   
      if((item.name).includes(".htm"))
      {
        this.githubService.getEjeDiario(item.name).subscribe(data => {
          let nombreEjes = data.name.split(".",2)[0];
          console.log(nombreEjes);
          this.ejesDiarios.push(nombreEjes);
        });
      }            
    });
    });
  }
}
