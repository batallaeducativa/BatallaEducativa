import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
import { GithubService } from '../../services/github.service'

@Component({
  selector: 'app-ejesmensuales',
  templateUrl: './ejesmensuales.component.html',
  styleUrls: ['./ejesmensuales.component.css']
})
export class EjesmensualesComponent implements OnInit {

  public ejesMensuales;

  constructor(private githubService: GithubService,
    private router: Router) { 
  }

  ngOnInit() {
  this.ejesMensuales = new Array();
  //this.claseSeminario = new Array();
  let i = 1;
  let nombre: string;

  this.githubService.getEjesMensuales().subscribe(data => {
    data.forEach(item => {   
      if((item.name).includes(".pdf"))
      {
        this.githubService.getEjeMensual(item.name).subscribe(data => {
          let nombreEjes = data.name.split(".",2)[0];
          console.log(nombreEjes);
          this.ejesMensuales.push(nombreEjes);
        });
      }            
    });
    });
  }
}
