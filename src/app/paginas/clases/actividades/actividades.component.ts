import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../../services/github.service';
import { utf8Encode } from '@angular/compiler/src/util';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  private nombreClase: string;
  private contenidoClase: string;
  
  constructor(private githubService: GithubService,
              private route : ActivatedRoute) {    
      this.nombreClase = this.route.snapshot.paramMap.get('nombre');
  }

  ngOnInit() {
    this.githubService.getClase('actividades', this.nombreClase).subscribe(data => {
      //base64 decode to unicode
        this.contenidoClase = decodeURIComponent(atob(data.content).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
    });
  }      
}
