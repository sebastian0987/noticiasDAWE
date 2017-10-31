export class Noticia{

    public titulo: string;
    public descripcion: string;
    public urlimagen: string;
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