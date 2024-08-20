import { Producto } from "../../types.ts";
import { Button } from "../../elements/Button.tsx";
import { Snitch } from "../../elements/Snitch.tsx";
import { magicDivisesToMuggle, COPFormmater } from "../../services/ConversorDivisas.ts";
import { useNavigate } from "react-router-dom";
import { Cantidad } from "../../elements/cantidadProducto.tsx";
import { Campo } from "../../elements/DetalleProducto/Campo.tsx";
interface DescripcionProps {
    producto: Producto;
}
export function Descripcion({ producto }: DescripcionProps) {
    const navigate = useNavigate();
    function handleVolver() {
        navigate("/");
    }
    return (
        <div className="container-description">
            <div className="tittle-back">
                <h2>{producto?.nombre}</h2>
                <Button className="volver" onClick={handleVolver}>Volver</Button>
                {/*agregar vuelta atras*/}
            </div>
            <div className="calificacion">
                <h3>Calificación: </h3>
                <Snitch calificacion={producto!.calificacion} />
            </div>
            <Campo tittle="Descripción:">{producto?.descripcion}</Campo>
            <Campo tittle="Creador:">{producto?.creador}</Campo>
            <Campo tittle="Advertencia:">{producto?.advertencia}</Campo>
            <Campo tittle="Duración:">{producto?.duracion}</Campo>
            <Campo tittle="Precio:">{`${producto?.precio} ${producto?.divisa}   /   ${COPFormmater(magicDivisesToMuggle(producto!.divisa, producto!.precio)!)} COP`}</Campo>
            <h3 className="different-lines">Cantidad: </h3>
            <Cantidad />
            <div className="different-lines two-buttons">
                <Button className="anadir-carrito">Añadir al carrito</Button>
                <Button className="boton-azul">Ver Efecto</Button>
            </div>
        </div>
    )
}