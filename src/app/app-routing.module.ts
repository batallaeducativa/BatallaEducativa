import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './components/home/home.component';
import { SeminarioComponent } from './components/seminario/seminario.component';
import { ClaseComponent } from './paginas/clases/clase/clase.component';

const routes: Routes = [
  {path:'', component: HomeComponent },
  //{path:'home', component: HomeComponent },
  {path:'seminario', component: SeminarioComponent},
  {path:'clase/:nombre', component: ClaseComponent}  
  //{path:'**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
