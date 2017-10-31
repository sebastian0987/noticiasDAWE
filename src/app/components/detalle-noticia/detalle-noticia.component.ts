import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import {NoticiasService} from "../../services/noticias.service";
import {Noticia} from '../../models/Noticia';

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.css']
})
export class DetalleNoticiaComponent implements OnInit {
  public noticia: Noticia;
  constructor(private noticiasService: NoticiasService,
              private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    this.getNoticia();
  }

  getNoticia(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this.noticiasService.getDetalleFavorito(id).subscribe(
          response => {
            if(response.code == 200){
              this.noticia = response.data;
            }else{
              this._router.navigate(['ERROR']);
            }
          },
          error => {
            console.log(<any>error);
          }
      );
    });
  }
}
