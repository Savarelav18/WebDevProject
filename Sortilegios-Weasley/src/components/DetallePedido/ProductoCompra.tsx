import { mockProductos } from "../../mocks/MockProductos";
import { magicDivisesToMuggle, COPFormmater } from "../../services/ConversorDivisas";
// import { ProductoCarrito } from "../../types.ts";
import { CantidadPedido } from "../../elements/DetallePedido/cantidadProductoPedido.tsx";
import { ItemCarrito, useCarritoCompras } from "../../context/carrito.tsx";
interface ProductoCompraProps {
    productoCarrito: ItemCarrito;
}
export function ProductoCompra({ productoCarrito}: ProductoCompraProps) {
    const {removerProducto} = useCarritoCompras()
    const producto = mockProductos.find((producto) => producto.id === productoCarrito.id);
    return (
        <div className="producto-muestra">
            <h3>{producto?.nombre}</h3>
            <hr />
            <div className="img-container">
                <img src={producto?.imagenes[0]} alt={producto?.nombre} />
                <div className="descp-prod">
                    <p>{producto?.descripcion}</p>
                    <div className="botones">
                        <div className="bot">
                            <button className="button-eliminar" onClick={() => removerProducto(productoCarrito.id)}>Eliminar</button>
                            <CantidadPedido cantidad={productoCarrito.cantidad} id={productoCarrito.id} />
                        </div>
                        <div className="cost">
                            <p className="costo">$ {COPFormmater(magicDivisesToMuggle(producto!.divisa, producto!.precio)! * productoCarrito.cantidad)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}