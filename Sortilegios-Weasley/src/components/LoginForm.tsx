import "../styles/Login.css"
import { NavBar } from "./navBar"
import { useState } from "react";
import { usuario } from "../elements/variablesGlobales";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../elements/showPassword";
import { Button } from "react-bootstrap";
/* import { useUserForm } from "../elements/variablesGlobales"; */


export const LoginForm = () =>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMensaje, setErrorMensaje] = useState("");
    const [loading, setLoading] = useState(false);
    const Navigate = useNavigate();


    const pulsar = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (username==="" || password==="") {
            setError(true);
            setErrorMensaje("Todos los campos son obligatorios")

            return
        } 

        else if (username != usuario.nombre) {
            setError(true);
            setErrorMensaje("Usuario no encontrado")
            return;
        }

        else if (password != usuario.contraseña) {
            setError(true);
            setErrorMensaje("Contraseña incorrecta")
            return;
        }

        setError(false);
        setLoading(true);
        setErrorMensaje("✨¡Alohomora!🔑")

        setTimeout(() => {
            setLoading(false);
            Navigate('/');
            window.localStorage.setItem("isLogedIn", 'true');
        }, 2000);
    }


    return (<>

    <NavBar/>
    <link rel="stylesheet" href="../styles/Login.css"></link>
    <div className="content">
        <div className="formulario"  >
            <h1>INICIA SESIÓN</h1>
            <p>¿Aún no tienes cuenta?</p> 
            
            <span> <a href="/Register"> REGISTRATE </a> </span> 
            <form method="post" onClick={pulsar}> 
                <label>USUARIO*</label>
                <input  
                type='text'
                id="usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                /> 
                <label>CONSTRASEÑA*</label>
                <PasswordInput password={password} setPassword={setPassword} />
                <div className="mensaje">
                {error? (<p className="error">{errorMensaje}</p>) : (<p>{errorMensaje}</p>)} </div>
                <Button onClick={()=>pulsar} disabled={loading}>
                {loading ? "Cargando..." : "INICIAR SESIÓN"}
                </Button>
                
            </form>
        </div>
        <div className="imagen"> 
            <img src="src/assets/logo.png" />
        </div> 

    </div>  
        
    </>
    )
}