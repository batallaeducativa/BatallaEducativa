import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
import { GithubService } from '../../services/github.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ejesdiarios',
  templateUrl: './ejesdiarios.component.html',
  styleUrls: ['./ejesdiarios.component.css']
})

export class EjesdiariosComponent implements OnInit {

  public ejesDiarios;
  public nombreClase

  constructor(private githubService: GithubService,
    private route : ActivatedRoute) {    
      this.nombreClase = this.route.snapshot.paramMap.get('nombre');
  }

  ngOnInit() {
  }
}
