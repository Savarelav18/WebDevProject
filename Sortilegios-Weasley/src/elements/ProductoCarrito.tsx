import React from "react"
import "../styles/ProductoCarrito.css"
import {Cantidad} from "../elements/cantidadProducto"

interface ProductoCarritoProps{
    nombre:string
    imagen:string
    cantidad:string
    valor:number
    total:number
}


export const ProductoCarrito:React.FC<ProductoCarritoProps>=({nombre})=>{
    return(
    <>
    <div className="producto-carrito">
    <header className="titulo-Producto">
        <span><h3 style={{textAlign:"left"}}>{nombre}</h3></span>
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z" clipRule="evenodd" />
            </svg>
        </span>
    </header>
        <aside><img src="src/assets/snitch.png" alt="imagen" className="imagen-Producto" /></aside>
        <article className="info">
            Cantidad:<Cantidad/>
            <p>Valor: 10 Galeones</p>
        </article>
    
    </div>
    
    </>
    )
}