import { MiniDescProd } from "../../elements/DetallePedido/MiniDescProd";
import { magicDivisesToMuggle, COPFormmater } from "../../services/ConversorDivisas";
import { mockProductos } from "../../mocks/MockProductos.ts";
import { useState } from "react";
import { ProductoCarrito } from "../../types";
import imag from "../../assets/DetallePedido/selloGringottts.png";
import { useNavigate } from "react-router-dom";
interface ResumenCompraProps {
    productosCarro: Array<ProductoCarrito>;
}

export function ResumenCompra({ productosCarro }: ResumenCompraProps) {
    const total = productosCarro.reduce((a, b) => a + magicDivisesToMuggle(mockProductos.find(x => x.id === b.id_producto)!.divisa, mockProductos.find(x => x.id === b.id_producto)!.precio)! * b.cantidad, 0);
    const navigate = useNavigate();
    const [direccion, setDireccion] = useState("");
    function handleCompra() {
        if (direccion === "") {
            alert("Por favor ingrese una dirección de entrega");
            return;
        }
        navigate("/Pago", {
            state: {
                total: total,
                productosCarro: productosCarro,
                direccion: direccion
            }
        });
    }

    return (
        <div className="resumen-compra">
            <h2>Resumen de compra</h2>
            <hr />
            {productosCarro.map(producto => {
                const productoFind = mockProductos.find(x => x.id === producto.id_producto)!;
                return <MiniDescProd name={productoFind.nombre} price={productoFind.precio} quantity={producto.cantidad} divise={productoFind.divisa} />;
            }
            )}
            <hr />
            <div className="total-container">
                <p className="total-string">Total</p>
                <p className="total-compra">$ {COPFormmater(total)}</p>
            </div>
            <hr />
            <form action="">
                <label htmlFor="direccion">Dirección de entrega: </label>
                <input type="text" id="direccion" onChange={(e) => setDireccion(e.target.value)} required />
                <p className="nota">Querido comprador, recuerde que al ser artículos mágicos al momento de realizar la compra los productos llegaran inmediatamente mediante nuestro sistema de teletransporte de productos, así que verifique que su dirección este correcta.</p>


                <button className="button-compra" onClick={handleCompra} type="submit">
                    <p>Comprar</p>
                    <img src={imag} />
                </button>
            </form>

        </div>
    )
}