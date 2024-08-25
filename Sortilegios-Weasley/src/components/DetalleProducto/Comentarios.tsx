import { Comentario } from "../../types.tsx";
import { Comentario as Coment } from "../../elements/DetalleProducto/Comentario.tsx";
import { CrearComentario } from "../../elements/DetalleProducto/CrearComentario.tsx";
import { useState } from "react";
interface ComentariosProps {
    comentarios: Comentario[];
}
export function Comentarios({ comentarios }: ComentariosProps) {
    const [comentariosList, setComentariosList] = useState(comentarios);
    const agregarComentario = (comentario: Comentario) => {
        if (comentariosList.length === 0) {
            comentario['id'] = 0;
        } else {
            comentario['id'] = comentariosList[comentariosList.length - 1].id + 1;
        }

        setComentariosList([...comentariosList, comentario]);

    }
    return (
        <div className="container-comentarios" style={{ marginTop: "5rem" }}>
            <CrearComentario agregarComentario={agregarComentario} />
            {comentariosList.map(comentario => (<Coment comentario={comentario} key={comentario.id} />))}
        </div>
    )

}