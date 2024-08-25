import { useEffect, useState } from "react";

export function useLocalStorage<T>(llave:string, valorinicial: T | (()=>T)){
    const[valor,setValor] = useState<T>(()=>{
        const jsonValue = localStorage.getItem(llave)
        if (jsonValue != null) return JSON.parse(jsonValue)
        
        if(typeof valorinicial === "function"){
            return (valorinicial as () => T)() 
        } else{
            return valorinicial
        }
    })

    useEffect(() => {
        localStorage.setItem(llave,JSON.stringify(valor))
    },[llave,valor])

    return [valor,setValor] as [typeof valor,typeof setValor]
}