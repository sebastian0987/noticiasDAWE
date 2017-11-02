import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {routing, appRoutingProviders} from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NoticiasService } from './services/noticias.service';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { DetalleNoticiaComponent } from './components/detalle-noticia/detalle-noticia.component';
import { ErrorComponent } from './components/error/error.component';
import { MenuGlobalComponent } from './components/menu-global/menu-global.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatListModule,
  MatInputModule,
  MatCardModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatTabsModule,
  MatGridListModule,
  MatSidenavModule,
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritosComponent,
    DetalleNoticiaComponent,
    ErrorComponent,
    MenuGlobalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTabsModule,
    MatGridListModule,
    MatSidenavModule,
    routing
  ],
  providers: [NoticiasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
