import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
import { GithubService } from '../../services/github.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ejesdiario',
  templateUrl: './ejesdiario.component.html',
  styleUrls: ['./ejesdiario.component.css']
})

export class EjesdiarioComponent implements OnInit {

  private nombreEje: string;
  private contenidoEje: string;
  
  constructor(private githubService: GithubService,
              private route : ActivatedRoute) {    
      this.nombreEje = this.route.snapshot.paramMap.get('nombre');
  }

  ngOnInit() {
    this.githubService.getEjeDiario('ejesdiarios', this.nombreEje).subscribe(data => {
      //base64 decode to unicode
        console.log(data);
        this.contenidoEje = decodeURIComponent(atob(data.content).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
    });
  }
}
