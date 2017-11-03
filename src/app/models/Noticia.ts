export class Noticia {

    public titulo: string;
    public descripcion: string;
    public urlimagen: string;
    public liked: boolean;
    contructor() {}

    setTitulo(titulo: string) {
        this.titulo = titulo;
    }

    setDescripcion(descripcion: string) {
        this.descripcion = descripcion;
    }

    setUrl(url: string) {
        this.urlimagen = url;
    }
    setLiked(liked: boolean) {
      this.liked = liked;
    }


}
