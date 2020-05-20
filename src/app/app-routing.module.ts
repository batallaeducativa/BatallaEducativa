import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { ModuloComponent } from './components/modulo/modulo.component';
import { ActividadesComponent } from './paginas/clases/actividades/actividades.component';
import { EjesdiariosComponent } from './paginas/ejesdiarios/ejesdiarios.component';
import { EjesmensualesComponent } from './paginas/ejesmensuales/ejesmensuales.component';

const routes: Routes = [
  {path:'home', component: HomeComponent },
  {path:'modulo/:nombre', component: ModuloComponent},
  {path:'actividades/:nombre', component: ActividadesComponent},
  {path:'ejesdiarios/:nombre', component: ActividadesComponent},
  //{path:'clase/:nombre', component: ActividadesComponent},
  {path:'**', pathMatch: 'full', redirectTo: 'home'}
  /*
  {path:'clases/:nombre', component: ClaseComponent},
  {path:'ejes_diarios', component: EjesdiariosComponent}, 
  {path:'ejes_diarios/:nombre', component: EjesdiariosComponent}, 
  {path:'ejes_mensuales', component: EjesmensualesComponent},
  {path:'ejes_mensuales/:nombre', component: EjesmensualesComponent} */
  //{path:'**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
