import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {routing, appRoutingProviders} from './app.routing';
import { HttpModule } from '@angular/http';
import { NoticiasService } from './services/noticias.service';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { DetalleNoticiaComponent } from './components/detalle-noticia/detalle-noticia.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritosComponent,
    DetalleNoticiaComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
  ],
  providers: [NoticiasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
