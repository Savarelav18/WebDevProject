import { Button,FormLabel } from "react-bootstrap";
import snitchLlena from '../../assets/snitch.png'
import { useState } from "react";
import { usuario } from "../../elements/variablesGlobales";

export function CrearComentario() {
    const [calificacion, setCalificacion] = useState(0); // Estado para la calificación seleccionada

    const handleClick = (valor:number) => {
        setCalificacion(valor); // Actualiza la calificación seleccionada
    };
    return (
        <div className="crear-comentario">
            <h2 className="deja-comentario">Deja tu reseña</h2>
            <form style={{display:"flex",flexDirection:"column"}}>
                <FormLabel style={{fontSize:"18px",fontWeight:"bold"}}>Usuario: <span style={{fontSize:"16px",fontWeight:"no"}}><FormLabel>{usuario.nombre}</FormLabel></span></FormLabel>
                <FormLabel style={{fontSize:"18px",fontWeight:"bold"}}>calificación</FormLabel>
                <div className="calificacion-snitch">
                {[1, 2, 3, 4, 5].map((valor) => (
                        <Button key={valor} onClick={() => handleClick(valor)} style={{backgroundColor:"transparent",border:"none",width:"35px", height:"35px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <img
                                src={snitchLlena}
                                alt="Snitch"
                                style={{ opacity: valor <= calificacion ? 1 : 0.5 }} // 100% opaco si el botón es menor o igual a la calificación, 50% si no
                            />
                        </Button>
                    ))}
                
                </div>
                <FormLabel style={{fontSize:"18px",fontWeight:"bold"}}>Comentario</FormLabel>
                <textarea className="area-comentario">
                </textarea>
                <button type="submit" className="boton-azul der">Enviar</button>
                
            </form>
        </div>
    )
}