export class Noticia{

    private titulo: string;
    private descripcion: string;
    private urlimagen: string;
    contructor(){}

    setTitulo(titulo:string){
        this.titulo = titulo;
    }

    setDescripcion(descripcion:string){
        this.descripcion = descripcion;
    }

    setUrl(url:string){
        this.urlimagen=url;
    }

}