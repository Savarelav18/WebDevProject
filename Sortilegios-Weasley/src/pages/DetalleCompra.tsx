import { NavBar } from "../components/navBar"
import { useLocation } from "react-router-dom";
import { ProductoCompra } from "../components/DetalleCompra/ProductoCompra";
import { COPFormmater } from "../services/ConversorDivisas";
import { useNavigate } from "react-router-dom";
import "../styles/DetalleCompra.css"
import { ProductoCarrito } from "../types";
import { ItemCarrito } from "../context/carrito";

export function DetalleCompra() {
    const navigate = useNavigate();
    const location = useLocation();
    function handleVolver() {
        navigate("/");
    }
    return (

        <>
            <NavBar />
            <div className="contenedor">
                <h1>Detalle de compra</h1>
                <hr />
                {location.state.productosCarro.map((producto: ItemCarrito) => (<ProductoCompra prod={producto} />))}
                <div className="container-total">
                    <p className="total">Direccion de entrega: {location.state.direccion}</p>
                    <p className="total">Total pagado: $ {COPFormmater(location.state.total)}</p>
                </div>
                <button className="inicio" onClick={handleVolver}>Volver a inicio</button>
            </div>

        </>
    )
}