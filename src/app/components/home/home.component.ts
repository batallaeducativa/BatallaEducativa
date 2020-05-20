import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private modulos:any[] = [
    {
      nombre: "actividades"      
    },
    {
      nombre: "ejediario",
    },
    {
      nombre: "ejemensual",
    }
  ]

  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  verActividades(){
    this.router.navigate(['\modulo',"actividades"]);
  }

  verEjesDiarios(){
    this.router.navigate(['\modulo',"ejesdiarios"]);
  }

  verEjesMensuales(){
    this.router.navigate(['\modulo',"ejesmensuales"]);
  }
}
