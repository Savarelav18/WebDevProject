import { NavBar } from "../components/navBar.tsx";
import { useParams } from "react-router-dom";
import { mockProductos } from "../mocks/MockProductos.ts";
import { Imagenes } from "../components/DetalleProducto/Imagenes.tsx";
import { Descripcion } from "../components/DetalleProducto/Description.tsx";
import { Comentarios } from "../components/DetalleProducto/Comentarios.tsx";
import "../styles/DetalleProducto.css";

export function DetalleProducto() {
    const { productId } = useParams();
    const producto = mockProductos.find(x => x.id === Number(productId));

    return (
        <>
            <NavBar />
            <div className="fondo-completo">
                <div className="fondo-descripcion">
                    <Imagenes imagenes={producto!.imagenes} />
                    <Descripcion producto={producto!} />
                </div>
                <Comentarios comentarios={producto!.comentarios} />
            </div >

        </>
    )
}