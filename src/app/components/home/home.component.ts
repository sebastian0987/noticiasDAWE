import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {NoticiasService} from '../../services/noticias.service';
import {Noticia} from '../../models/Noticia';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [NoticiasService]
})
export class HomeComponent implements OnInit {

    public noticias: Noticia[];
    public noticia: Noticia;

    constructor(private noticiasService: NoticiasService,
                private _route: ActivatedRoute,
                private _router: Router) {
    }

    ngOnInit() {
        this.noticiasService.getNoticia().subscribe(
            result => {
                this.noticias = result.articles;
            }
        );
    }

    guardar(titulo: string, descripcion: string, urlimagen: string) {
        this.noticia = new Noticia();
        this.noticia.setTitulo(titulo.replace(/["']/g, ''));
        this.noticia.setDescripcion(descripcion.replace(/["']/g, ''));
        this.noticia.setUrl(urlimagen);
        this.noticiasService.addNoticia(this.noticia).subscribe(
            response => {
                if (response.code === 200) {
                    this._router.navigate(['/']);
                } else {
                    console.log(response);
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

}
