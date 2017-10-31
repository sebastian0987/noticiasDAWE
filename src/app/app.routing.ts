import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { HomeComponent } from './components/home/home.component';
import {FavoritosComponent} from "./components/favoritos/favoritos.component";
import {DetalleNoticiaComponent} from "./components/detalle-noticia/detalle-noticia.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'favoritos', component: FavoritosComponent},
    {path: 'favorito/:id', component: DetalleNoticiaComponent},
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);