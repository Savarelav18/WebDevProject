import { Comentario } from "../../types.tsx";
import { Comentario as Coment } from "../../elements/DetalleProducto/Comentario.tsx";
import { CrearComentario } from "../../elements/DetalleProducto/CrearComentario.tsx";
interface ComentariosProps {
    comentarios: Comentario[];
}
export function Comentarios({ comentarios }: ComentariosProps) {
    return (
        <div className="container-comentarios" style={{marginTop:"5rem"}}>
            <CrearComentario />
            {comentarios.map(comentario => (<Coment comentario={comentario} />))}
        </div>
    )

}