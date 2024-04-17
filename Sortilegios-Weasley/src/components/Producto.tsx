import { useState } from "react";

interface ProductoProps{
    nombre:string;
    precio:string;
    imagen?:string;
}

export const Producto:React.FC<ProductoProps>=({nombre, precio,imagen}) => {
    const [cantidad,setCantidad] = useState(1)
    const [calificacion,setCalificacion]=useState(0)
    const sumar = () =>{
        setCantidad(cantidad+1)
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
            <div className="calificacion" style={{display:"flex",flexDirection:"row"}}>
                <img src="src/assets/snitch.png" alt="" />
                <img src="src/assets/snitch.png" alt="" />
                <img src="src/assets/snitch.png" alt="" />
                <img src="src/assets/snitch.png" alt="" />
                <img src="src/assets/snitch.png" alt="" />
            </div>
            <p>{precio} Galeones</p>
            <div className="cantidad-producto">
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" onClick={restar} style={{cursor:"pointer"}}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                </span>
                <p style={{display:"inline",fontSize:"26px"}}>{cantidad}</p>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6" onClick={sumar} style={{cursor:"pointer"}}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                </span>
            </div>

            <a href="#">añadir al carrito</a>
        </div>

    </article>
    )
}