import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Noticia } from '../models/Noticia';

@Injectable()
export class NoticiasService {

  public url: string;
  constructor(public _http: Http) {
    this.url = 'https://newsapi.org/v1/articles?source=ign&sortBy=top&apiKey=1d8af17633df48d38b96417d01adf99b';
  }

  getNoticia(){
    return this._http.get(this.url).map(res => res.json());
  }

  addNoticia(noticia: Noticia){
    let json = JSON.stringify(noticia);
    // let params = 'json='+json;
    console.log(json);
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    return this._http.post('http://localhost/prueba2DAWE-backend/index.php/guardar-noticia', json, {headers: headers})
        .map(
            res => res.json());
  }
}
