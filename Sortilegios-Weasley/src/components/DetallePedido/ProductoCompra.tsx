import { mockProductos } from "../../mocks/MockProductos";
import { magicDivisesToMuggle, COPFormmater } from "../../services/ConversorDivisas";
import { ProductoCarrito } from "../../types.ts";
import { CantidadPedido } from "../../elements/DetallePedido/cantidadProductoPedido.tsx";
interface ProductoCompraProps {
    productoCarrito: ProductoCarrito;
    setCantidad: (cantidad: number) => void;
}
export function ProductoCompra({ productoCarrito, setCantidad }: ProductoCompraProps) {
    const producto = mockProductos.find((producto) => producto.id === productoCarrito.id_producto);
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
                            <button className="button-eliminar" onClick={() => { setCantidad(0) }}>Eliminar</button>
                            <CantidadPedido cantidad={productoCarrito.cantidad} setCantidad={setCantidad} />
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