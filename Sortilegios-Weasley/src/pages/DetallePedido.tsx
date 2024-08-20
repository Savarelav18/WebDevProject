import { ResumenCompra } from "../components/DetallePedido/ResumenCompra";
import { NavBar } from "../components/navBar";
import { ProductoCompra } from "../components/DetallePedido/ProductoCompra";


import "../styles/DetallesPedido.css";
import {useCarritoCompras} from "../context/carrito.tsx";

export function DetallePedido() {
    const {productosCarrito, aumentarCantidadProducto, disminuirCantidadProducto} = useCarritoCompras();

    /*function handleCantidadChange(op: number, id: number) {
        setProducto(productos.map((p) => {
            if (p.id_producto === id) {
                return {
                    ...p,
                    cantidad: op
                }
            }
            return p;
        }).filter((p) => p.cantidad > 0));
    }*/

    return (
        <>
            <NavBar />
            <div className="contenedor-fondo">
                <div className="contenedor-productos">
                    {/*productosCarrito.map((producto) => (<ProductoCompra productoCarrito={producto} setCantidad={(op) => handleCantidadChange(op, producto.id_producto)} />))*/}
                </div>
                <div className="contenedor-resumen">
                    <ResumenCompra productosCarro={productosCarrito} />
                </div>
            </div>
        </>
    )
}