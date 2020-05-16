import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private modulos:any[] = [
    {
      nombre: "Inicio brigadas",
      link: "inicioBrigada"
    },
    {
      nombre: "1ro",
      link: "1ro"
    },
    {
      nombre: "2do",
      link: "2do"
    },
    {
      nombre: "3ro",
      link: "3ro"
    }
  ]

  private ejesdiarios:any[];

  constructor(private githubService: GithubService) { 
    this.githubService.getEjesDiarios().subscribe(data => {
      data.forEach(item => {          
          this.githubService.getEjeDiario(item.name).subscribe(data => {
            console.log(data);
            this.ejesdiarios.push({
              name: data.name
            });
          });
      });
    });
  }

  ngOnInit() {
  }

}
