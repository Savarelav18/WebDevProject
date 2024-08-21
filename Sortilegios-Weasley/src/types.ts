type Categoria = "pociones" | "dulces" | "varitas";
type Divisa = "galeones" | "sickles" | "knuts";

export interface Comentario {
    id: number;
    usuario: string;
    contenido: string;
    calificacion: number;
    fecha: string;
}
export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    creador: string;
    advertencia: string;
    duracion: string;
    precio: number;
    cantidad: number;
    imagenes: string[];
    categoria: Categoria;
    divisa: Divisa;
    calificacion: number;
    efectoVisual: string;
    efecto: string;
    comentarios: Comentario[];
}
export interface ProductoCarrito {
    id_producto: number;
    cantidad: number;
}