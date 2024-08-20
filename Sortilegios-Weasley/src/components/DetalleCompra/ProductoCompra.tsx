import { ItemCarrito } from "../../context/carrito.tsx";
import { mockProductos } from "../../mocks/MockProductos.ts";
import { magicDivisesToMuggle, COPFormmater } from "../../services/ConversorDivisas";
import { ProductoCarrito } from "../../types"

interface ProductoCompraProps {
    prod: ItemCarrito;
}
export function ProductoCompra({ prod }: ProductoCompraProps) {
    const producto = mockProductos.find((producto) => producto.id === prod.id);
    return (

        <>
            <div className="img-container">
                <img src={producto?.imagenes[0]} alt={producto?.nombre} />
                <div className="descp-prod">
                    <h3>{producto?.nombre} ({prod.cantidad})</h3>
                    <p>{producto?.descripcion}</p>
                    <div className="botones">
                        <div className="cost">
                            <p className="costo">$ {COPFormmater(magicDivisesToMuggle(producto!.divisa, producto!.precio)! * prod.cantidad)}</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}