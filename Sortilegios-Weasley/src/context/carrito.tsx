import { createContext, ReactNode, useContext, useState } from "react";
import { Carrito } from "../components/Carrito";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CarritoComprasProviderProps = {
    children:ReactNode
}



export type ItemCarrito={
    id:number
    cantidad:number
}

type CarritoComprasContexto = {
    abrirCarrito:()=>void
    cerrarCarrito:()=>void
    getCantidadProducto:(id:number)=> number
    aumentarCantidadProducto:(id:number)=> void
    disminuirCantidadProducto:(id:number)=> void
    removerProducto:(id:number)=> void
    cantidadCarrito:number
    productosCarrito:ItemCarrito[]

}

const ContextoCarrito = createContext({} as CarritoComprasContexto)

export function useCarritoCompras(){
    return useContext(ContextoCarrito)
}

export function CarritoComprasProvider({children}:CarritoComprasProviderProps){
    const [itemsCarrito,setItemsCarrito]= useLocalStorage<ItemCarrito[]>("shopping-cart",[])
    const [abierto, setIsOpen] = useState(false)
    const cantidadCarrito = itemsCarrito.reduce((cantidad,producto)=>producto.cantidad + cantidad,0)
    const abrirCarrito = () => setIsOpen(true)
    const cerrarCarrito = () => setIsOpen(false)

    function getCantidadProducto (id:number){
        return itemsCarrito.find(item=>item.id === id)?.cantidad || 0
    }

    function aumentarCantidadProducto(id:number){
        setItemsCarrito(productosActuales =>{
            if (productosActuales.find(producto => producto.id === id)== null){
                return [...productosActuales,{id,cantidad:1}]
            } else{
                return productosActuales.map (producto =>{
                    if (producto.id === id){
                        return { ...producto, cantidad:producto.cantidad+1}
                    } else{
                        return producto
                    }
                })   
            }
        })
    }

    function disminuirCantidadProducto (id:number){
        setItemsCarrito(productosActuales =>{
            if (productosActuales.find(producto => producto.id === id)?.cantidad === 1){
                return productosActuales.filter(producto=> producto.id !== id)
            } else{
                return productosActuales.map (producto =>{
                    if (producto.id === id){
                        return { ...producto, cantidad:producto.cantidad - 1}
                    } else{
                        return producto
                    }
                })   
            }
        })
    }

    function removerProducto(id:number){
        setItemsCarrito(productosActuales =>{
            return productosActuales.filter(producto=> producto.id !== id)
        })
    }

    return <ContextoCarrito.Provider 
    value={{
        getCantidadProducto,
        aumentarCantidadProducto,
        disminuirCantidadProducto,
        removerProducto,
        productosCarrito:itemsCarrito,
        abrirCarrito,
        cerrarCarrito,
        cantidadCarrito
        }}>
        {children}
        <Carrito abierto = {abierto}/>
    </ContextoCarrito.Provider>
}
