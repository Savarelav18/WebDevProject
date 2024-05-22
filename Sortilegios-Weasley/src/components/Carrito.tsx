import React from "react";
import { ProductoCarrito } from "../elements/ProductoCarrito"
import "../styles/Carrito.css"

export const Carrito = () =>{
    return (
        <div className="Carrito" style={{overflowY:"scroll", height:"720px"}}>
            <img src="" alt="" />
            <h3 style={{textAlign:"center"}}>Carrito de compras</h3>
            <ProductoCarrito nombre="Producto1" imagen="" cantidad="2" valor={2} total={2}/>
            <ProductoCarrito nombre="Producto1" imagen="" cantidad="2" valor={2} total={2}/>
            <ProductoCarrito nombre="Producto1" imagen="" cantidad="2" valor={2} total={2}/>
            <ProductoCarrito nombre="Producto1" imagen="" cantidad="2" valor={2} total={2}/>
            <ProductoCarrito nombre="Producto1" imagen="" cantidad="2" valor={2} total={2}/>
            <ProductoCarrito nombre="Producto1" imagen="" cantidad="2" valor={2} total={2}/>
            <ProductoCarrito nombre="Producto1" imagen="" cantidad="2" valor={2} total={2}/>
            <ProductoCarrito nombre="Producto1" imagen="" cantidad="2" valor={2} total={2}/>
            <ProductoCarrito nombre="Producto1" imagen="" cantidad="2" valor={2} total={2}/>
            <ProductoCarrito nombre="Producto1" imagen="" cantidad="2" valor={2} total={2}/>
            <ProductoCarrito nombre="Producto1" imagen="" cantidad="2" valor={2} total={2}/>
            <footer className="total-pago"><p>Total: 0 Galeones</p></footer>
        </div>
        
    )
}