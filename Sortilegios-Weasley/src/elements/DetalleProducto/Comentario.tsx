import { Comentario as Coment } from "../../types.tsx";
import { Snitch } from "../Snitch.tsx";
interface ComentarioProps {
    comentario: Coment;
}
export function Comentario({ comentario }: ComentarioProps) {
    return (
        <div className="comentario">
            <h3 className="usuario-coment">{comentario.usuario}</h3>
            <div className="calif-fecha">
                <div>
                    <Snitch calificacion={comentario.calificacion} />
                </div>
                <p>{comentario.fecha}</p>
            </div>
            <p>{comentario.contenido}</p>
        </div>
    )

}