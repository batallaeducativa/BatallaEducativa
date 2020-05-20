import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { SeminarioComponent } from './components/seminario/seminario.component';
import { ClaseComponent } from './paginas/clases/clase/clase.component';
import { EjesdiariosComponent } from './paginas/ejesdiarios/ejesdiarios.component';
import { EjesmensualesComponent } from './paginas/ejesmensuales/ejesmensuales.component';

const routes: Routes = [
  {path:'home', component: HomeComponent },
  {path:'inicioBrigada/:modulo', component: SeminarioComponent},
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
