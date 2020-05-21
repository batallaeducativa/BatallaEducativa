import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//paginas
import { ActividadesComponent } from './paginas/clases/actividades/actividades.component';
import { EjesdiarioComponent } from './paginas/ejesdiario/ejesdiario.component';
import { EjesmensualComponent } from './paginas/ejesmensual/ejesmensual.component';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ModuloComponent } from './components/modulo/modulo.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

//Modulos
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Material
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

//Services
import { GithubService } from './services/github.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModuloComponent,
    SidenavComponent,
    ActividadesComponent,
    EjesdiarioComponent,
    EjesmensualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
