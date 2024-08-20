import { ResumenCompra } from "../components/DetallePedido/ResumenCompra";
import { NavBar } from "../components/navBar";
import { ProductoCompra } from "../components/DetallePedido/ProductoCompra";


import "../styles/DetallesPedido.css";
import {useCarritoCompras} from "../context/carrito.tsx";

export function DetallePedido() {
    const {productosCarrito} = useCarritoCompras();
    return (
        
        <>
            <NavBar />
            <div className="contenedor-fondo">
                <div className="contenedor-productos">
                    {productosCarrito.map((producto) => (<ProductoCompra productoCarrito={producto} />))}
                </div>
                <div className="contenedor-resumen">
                    <ResumenCompra productosCarro={productosCarrito} />
                </div>
            </div>
        </>
    )
}