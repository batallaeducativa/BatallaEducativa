import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
      nombre: "ejesdiarios",
    },
    {
      nombre: "ejesmensuales",
    }
  ]
  
  constructor(private router: Router) { 
  }

  ngOnInit() {
  }

  mensajeUsuario(){
    alert("No hay actividades cargadas todavía para este año");
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
