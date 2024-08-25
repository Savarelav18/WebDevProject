import { Button, FormLabel } from "react-bootstrap";
import snitchLlena from '../../assets/snitch.png'
import { ChangeEvent, useState } from "react";
import { usuario } from "../../elements/variablesGlobales";
import { Comentario } from "../../types";

interface CrearComentarioProps {
    agregarComentario: (comentario: Comentario) => void;
}
export function CrearComentario({ agregarComentario }: CrearComentarioProps) {
    const [calificacion, setCalificacion] = useState(-1); // Estado para la calificación seleccionada
    const [comentario, setComentario] = useState(""); // Estado para el comentario
    const login = window.localStorage.getItem("isLogedIn");

    const handleClick = (valor: number) => {
        setCalificacion(valor); // Actualiza la calificación seleccionada
    };
    const changeComentario = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComentario(e.target.value); // Actualiza el comentario

    }
    const onComentarioSubmit = () => {
        if (login == null) {
            alert("Debe estar logueado para continuar.");
            window.location.href = "/Login";
            return;
        }
        if (calificacion === -1 || comentario === "") {
            alert("Debes seleccionar una calificación y escribir un comentario");
            return;
        }
        const nuevoComentario: Comentario = {
            id: 0,
            usuario: usuario.nombre,
            contenido: comentario,
            calificacion: calificacion,
            fecha: new Date().toLocaleDateString(),
        }
        setCalificacion(-1);
        setComentario("");
        agregarComentario(nuevoComentario);
    }

    return (
        <div className="crear-comentario">
            <h2 className="deja-comentario">Deja tu reseña</h2>
            <form style={{ display: "flex", flexDirection: "column" }}>
                <FormLabel style={{ fontSize: "18px", fontWeight: "bold" }}>calificación</FormLabel>
                <div className="calificacion-snitch">
                    {[1, 2, 3, 4, 5].map((valor) => (
                        <Button key={valor} onClick={() => handleClick(valor)} style={{ backgroundColor: "transparent", border: "none", width: "35px", height: "35px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img
                                src={snitchLlena}
                                alt="Snitch"
                                style={{ opacity: valor <= calificacion ? 1 : 0.5 }} // 100% opaco si el botón es menor o igual a la calificación, 50% si no
                            />
                        </Button>
                    ))}

                </div>
                <FormLabel style={{ fontSize: "18px", fontWeight: "bold" }}>Comentario</FormLabel>
                <textarea className="area-comentario" onChange={(e) => changeComentario(e)} value={comentario}>
                </textarea>
                <input type="button" className="boton-azul der" onClick={onComentarioSubmit} value='Enviar' />

            </form>

        </div>
    )
}