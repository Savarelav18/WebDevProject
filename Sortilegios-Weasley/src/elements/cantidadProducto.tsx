import { useState } from "react";


export const Cantidad=()=>{
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
    return(
    <>
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
    </>
    )
}