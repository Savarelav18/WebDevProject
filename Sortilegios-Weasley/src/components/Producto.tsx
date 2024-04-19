import { useState } from "react";
import {Snitch} from "../elements/Snitch"

interface ProductoProps{
    nombre:string;
    precio:string;
    imagen?:string;
    calificacion:number;
}

export const Producto:React.FC<ProductoProps>=({nombre, precio,imagen,calificacion}) => {
    
    const [cantidad,setCantidad] = useState(1)


    const sumar = () =>{
        if (cantidad<10){
            setCantidad(cantidad+1)
        }else
        return
    }
    const restar = () =>{
        if (cantidad>1){
            setCantidad(cantidad-1)
        }else
        return
    }
    
    
    return (
        <article className="product-card">
        <img className="product-image-card" src={`src/assets/${imagen}.png`} alt="producto" />
        <div className="informacion-producto">
            <h1>{nombre}</h1>
            <div className="calificacion">
                <Snitch calificacion={calificacion}/>
            </div>
            <div className="cantidad-precio-producto">
                <span style={{display:"inline-flex", alignItems:"center"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" style={{width:"26px"}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p style={{fontSize:"18px"}}>{precio} Galeones</p>
                </span>
                <div className="precio-producto" style={{display:"inline-flex", alignItems:"center"}}>
                <span style={{display:"inline-flex", alignItems:"center"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={restar} style={{cursor:"pointer",width:"24px"}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p style={{fontSize:"18px"}}>{cantidad}</p>
                </span>
                <span style={{display:"inline-flex", alignItems:"center"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={sumar} style={{cursor:"pointer",width:"24px"}}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </span>
                </div>
            </div>

            <a href="#">añadir al carrito</a>
        </div>

    </article>
    )
}