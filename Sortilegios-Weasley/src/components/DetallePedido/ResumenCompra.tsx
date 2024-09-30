import { MiniDescProd } from "../../elements/DetallePedido/MiniDescProd";
import { magicDivisesToMuggle, COPFormmater } from "../../services/ConversorDivisas";
import { mockProductos } from "../../mocks/MockProductos.ts";
import { useState } from "react";
//import {Producto, ProductoCarrito} from "../../types";
import imag from "../../assets/DetallePedido/selloGringottts.png";
import { useNavigate } from "react-router-dom";
import {ItemCarrito} from "../../context/carrito.tsx"
import { Button, FormControl } from "react-bootstrap";
interface ResumenCompraProps {
    productosCarro: ItemCarrito[];
}

export function ResumenCompra({ productosCarro }:ResumenCompraProps) {
    const total = productosCarro.reduce((total,itemCarrito)=>{
            const item =  mockProductos.find(i => i.id === itemCarrito.id)
            return total+ (magicDivisesToMuggle(item!.divisa,item!.precio) || 0) * itemCarrito.cantidad
            },0);
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
                const item =  mockProductos.find(i => i.id === producto.id)
                return <MiniDescProd name={item!.nombre} price={item!.precio} quantity={producto!.cantidad} divise={item!.divisa} />;
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
                <FormControl type="text" id="direccion" onChange={(e) => setDireccion(e.target.value)} required />
                <p className="nota">Querido comprador, recuerde que al ser artículos mágicos al momento de realizar la compra los productos llegaran inmediatamente mediante nuestro sistema de teletransporte de productos, así que verifique que su dirección este correcta.</p>


                <Button className="button-compra" onClick={handleCompra} type="submit">
                    <p>Comprar</p>
                    <img src={imag} />
                </Button>
            </form>

        </div>
    )
}