import { NavBar } from "../components/navBar.tsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { COPFormmater } from "../services/ConversorDivisas";
import { useLocation } from "react-router-dom";
import "../styles/Pago.css";

import imag from "../assets/pagos/selloDorado.png";
export function Pago() {
    const location = useLocation();
    const [card, setCard] = useState("");
    const [vencimiento, setVencimiento] = useState("");
    const [security, setSecurity] = useState("");
    const [postal, setPostal] = useState("");

    const navigate = useNavigate();

    function handleCardChange(e: React.ChangeEvent<HTMLInputElement>) {
        setCard(e.target.value);
        if (!(e.nativeEvent.inputType === "deleteContentBackward")) {
            if (e.target.value.length === 4 || e.target.value.length === 9 || e.target.value.length === 14) {
                setCard(e.target.value + " ");
            }
        }
    }
    function handlePago() {
        navigate("/DetalleCompra", {
            state: location.state,
        });
    }
    return (
        <>
            <NavBar />
            <div className="cuerpo">
                <h2>Realizar pago</h2>
                <div className="container-pago">
                    <div className="form-izq">
                        <form action="">
                            <div>
                                <label id="primero" className="bloque" htmlFor="card">Numero de gringotts card: </label>
                                <input maxLength={19} type="tel" name="" id="card" pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}" required onChange={handleCardChange} value={card} placeholder="Ejemplo: 1234 5678 9101 1121" />
                            </div>
                            <div>
                                <label className="bloque" htmlFor="vencimiento">Fecha de vencimiento: </label>
                                <input type="date" name="" id="vencimiento" onChange={(e) => { setVencimiento(e.target.value) }} required />
                            </div>
                            <div>
                                <label className="bloque" htmlFor="security">Codigo de seguridad: </label>
                                <input type="text" name="" id="security" pattern="[0-9]{3}" onChange={(e) => { setSecurity(e.target.value) }} maxLength={3} required />
                            </div>

                            <div>
                                <label className="bloque" htmlFor="postal">Codigo postal: </label>
                                <input type="text" name="" id="postal" pattern="[0-9]{6}" onChange={(e) => { setPostal(e.target.value) }} maxLength={6} required />
                            </div>

                            <p className="monto"><span className="montoCOP">Monto en COP: </span>$ {COPFormmater(location.state.total)}</p>


                            <button onClick={handlePago}>Realizar pago</button>
                        </form>
                    </div>
                    <div className="imagen-grin">
                        <img src={imag} alt="" />
                    </div>
                </div>
            </div >

        </>
    )
}