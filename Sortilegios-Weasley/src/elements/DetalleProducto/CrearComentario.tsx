export function CrearComentario() {
    return (
        <div className="crear-comentario">
            <h2 className="deja-comentario">Deja tu reseña</h2>
            <form>
                <textarea className="area-comentario">
                </textarea>
                <div className="calificacion-snitch">
                    <input id="1" type="radio" name="calificacion" value="1" className="snitch" />
                    <input type="radio" name="calificacion" value="2" />
                    <input type="radio" name="calificacion" value="3" />
                    <input type="radio" name="calificacion" value="4" />
                    <input type="radio" name="calificacion" value="5" />
                </div>
                <button type="submit" className="boton-azul der">Enviar</button>
            </form>
        </div>
    )
}