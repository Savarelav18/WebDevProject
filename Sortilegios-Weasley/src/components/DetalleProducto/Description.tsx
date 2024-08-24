import React, { useState } from 'react';
import { Producto } from "../../types.ts";
import { Button } from "../../elements/Button.tsx";
import { Snitch } from "../../elements/Snitch.tsx";
import { magicDivisesToMuggle, COPFormmater } from "../../services/ConversorDivisas.ts";
import { useNavigate } from "react-router-dom";
import { Campo } from "../../elements/DetalleProducto/Campo.tsx";
import { useCarritoCompras } from "../../context/carrito.tsx";
import { Button as ButtonRB, Container } from "react-bootstrap";

interface DescripcionProps {
    producto: Producto;
}

export function Descripcion({ producto }: DescripcionProps) {
    const navigate = useNavigate();
    const [efectoVisible, setEfectoVisible] = useState(false);

    function handleVolver() {
        navigate("/Tienda");
    }

    function mostrarEfecto() {
        setEfectoVisible(true);
        setTimeout(() => {
            setEfectoVisible(false);
        }, 5000);

    }
    const {getCantidadProducto,aumentarCantidadProducto,removerProducto} = useCarritoCompras()
    return (
        <div className="container-description">
            <div className="tittle-back">
                <h2>{producto?.nombre}</h2>
                <Button className="volver" onClick={handleVolver}>Volver</Button>
            </div>
            <div className="calificacion">
                <h3>Calificación: </h3>
                <Snitch calificacion={producto!.calificacion} />
            </div>
            <Campo tittle="Descripción:">{producto?.descripcion}</Campo>
            <Campo tittle="Creador:">{producto?.creador}</Campo>
            <Campo tittle="Advertencia:">{producto?.advertencia}</Campo>
            <Campo tittle="Duración:">{producto?.duracion}</Campo>
            <Campo tittle="Precio:">{`${producto?.precio} ${producto?.divisa}   /   ${COPFormmater(magicDivisesToMuggle(producto!.divisa, producto!.precio)!)} COP`}</Campo>
            <Container id="two-buttons">
                {getCantidadProducto(producto.id)===0?
                (<ButtonRB variant="none" onClick={()=> aumentarCantidadProducto(producto.id)} style={{backgroundColor:"#e19f41",color:"white",marginRight:"0.7rem"}}>Añadir al carrito</ButtonRB>):
                (<ButtonRB variant="danger" style={{backgroundColor:"#F3532F",marginRight:"0.7rem"}} onClick={()=>removerProducto(producto.id)}>Remover del carrito</ButtonRB>)}
                <ButtonRB variant="none" style={{backgroundColor:"#038bbb",color:"white"}}>Ver Efecto</ButtonRB>
            </Container>
            <h3 className="different-lines">Cantidad: </h3>
            <Cantidad />
            <div className="different-lines two-buttons">
                <Button className="anadir-carrito">Añadir al carrito</Button>
                <Button className="boton-azul" onClick={mostrarEfecto}>Ver Efecto</Button>
            </div>
            {efectoVisible && (
                <div className={producto?.efectoVisual}>
                    <div className={producto?.efecto}></div>
                </div>
            )}
        </div>
    );
}