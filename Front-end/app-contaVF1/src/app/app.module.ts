import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaComponent } from './componentes/empresa/empresa.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { PartidasComponent } from './componentes/partidas/partidas.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    CatalogoComponent,
    PartidasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
