import { MiniDescProd } from "../../elements/DetallePedido/MiniDescProd";
import { magicDivisesToMuggle, COPFormmater } from "../../services/ConversorDivisas";
import { mockProductos } from "../../mocks/MockProductos.ts";
import { useState } from "react";
import {Producto, ProductoCarrito} from "../../types";
import imag from "../../assets/DetallePedido/selloGringottts.png";
import { useNavigate } from "react-router-dom";
interface ResumenCompraProps {
    productosCarro: Array<Producto>;
}

export function ResumenCompra({ productosCarro }: ResumenCompraProps) {
    const total = productosCarro.reduce((a, b) => a + magicDivisesToMuggle(b.divisa, b.precio)! * b.cantidad, 0);
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
    console.log(productosCarro)
    return (
        <div className="resumen-compra">
            <h2>Resumen de compra</h2>
            <hr />
            {productosCarro.map(producto => {

                return <MiniDescProd name={producto.nombre} price={producto.precio} quantity={producto.cantidad} divise={producto.divisa} />;
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