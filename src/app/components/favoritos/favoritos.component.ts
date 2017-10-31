import { Component, OnInit } from '@angular/core';
import {Noticia} from "../../models/Noticia";
import {NoticiasService} from "../../services/noticias.service";
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  public noticias: Noticia[];
  constructor(private noticiasService: NoticiasService,
              private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    this.noticiasService.getFavoritos().subscribe(
        result => {
          this.noticias = result;
        }
    );
  }

}
