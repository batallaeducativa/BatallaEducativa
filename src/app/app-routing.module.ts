import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { SeminarioComponent } from './components/seminario/seminario.component';
import { ClaseComponent } from './paginas/clases/clase/clase.component';
import { EjesdiariosComponent } from './paginas/ejesdiarios/ejesdiarios.component';

const routes: Routes = [
  {path:'', component: HomeComponent },
  //{path:'home', component: HomeComponent },
  {path:'inicioBrigada', component: SeminarioComponent},
  {path:'clases/:nombre', component: ClaseComponent},
  {path:'ejesdiario/:nombre', component: EjesdiariosComponent}  
  //{path:'**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
