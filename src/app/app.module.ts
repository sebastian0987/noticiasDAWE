import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {routing, appRoutingProviders} from './app.routing';
import { HttpModule } from '@angular/http';
import { NoticiasService } from './services/noticias.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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
