import { Snitch } from "../elements/Snitch"
import "../styles/Producto.css"
import { producto } from "../context/type"
import {useCarritoCompras} from "../context/carrito"
import { Stack } from "react-bootstrap";
import { IconoPeso } from "../components/icons";



interface ProductosProp{
productos:producto[]

}


export const Producto:React.FC<ProductosProp> = ({productos}) => {
    const {getCantidadProducto,aumentarCantidadProducto,removerProducto} = useCarritoCompras()
    return (
        
        <>
            <main className="productos">
                <ul>
                    {productos.map(producto =>(
                        <li key={producto.id} className="product-card">
                            <div className="product-image-container">
                            <img 
                                src={producto.imagen} 
                                alt={producto.nombre}
                                className="product-image-card"
                            />
                            </div>
                            <div className="informacion-producto">
                                <h3>{producto.nombre}</h3>
                                <div className="calificacion">
                                    <Snitch calificacion={producto.calificacion} />
                                </div>
                                <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                        <span className="d-flex align-items-center">
                                        <IconoPeso/>
                                        <p style={{ fontSize: "18px", margin:"0" }}>{producto.precio} Galeones</p>
                                        </span>
                                    </div>
                                </Stack>
                                
                                {getCantidadProducto(producto.id)===0?(<button onClick={()=> aumentarCantidadProducto(producto.id)}>Añadir al carrito</button>):(<button onClick={()=>removerProducto(producto.id)} style={{backgroundColor:"#F3532F"}}>Remover</button>)}
                                
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    )
}