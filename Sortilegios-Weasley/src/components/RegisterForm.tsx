import "../styles/Register.css"
import { NavBar } from "./navBar"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../elements/showPassword";
import { useUserForm } from "../elements/variablesGlobales";
import { usuarios } from "../elements/usuarios.json";
import { Button } from "react-bootstrap";

export const RegisterForm = () =>{
    const {saveUser, setSaveUser, saveEmail, setSaveEmail, savePswrd, setSavePswrd } = useUserForm();
    const [validate, setValidate] = useState("");
    const [errorMensaje, setErrorMensaje] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const [error, setError] = useState(false);

    const registrar = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (saveUser==="" || saveEmail==="" || savePswrd==="" || validate==="") {
            setError(true);
            setErrorMensaje("Todos los campos son obligatorios")
            return;
        } 
        else if (savePswrd != validate){
            setError(true);
            setErrorMensaje("No coinciden las contraseñas")
            return;
        }
        else if(savePswrd.length < 8 ){
            setError(true);
            setErrorMensaje("La contraseña debe tener al menos 8 carácteres")
            return;
        }
        
        setError(false);
        setLoading(true);

        // Crear el nuevo usuario

        console.log("Usuarios actualizados:", usuarios);

        setErrorMensaje("¡Bienvenido/a a Sortilegios Weasley!");

        setTimeout(() => {
            setLoading(false);
            navigate('/Login');
        }, 2000);
    };

    return (<>
    <NavBar/>
    <link rel="stylesheet" href="../styles/Register.css"></link>
    <div className="cont">
        <div className="cuadrado"> 
            <img src="src/assets/logo2.png" />
        </div> 
        <div className="registro">
            <h1>REGISTRATE</h1>
            <p>¿Ya tienes cuenta?</p> 
            
            <span> <a href="/Login"> INICIA SESIÓN </a> </span> 
            
            <form method="post" onClick={registrar}> 
                <label>USUARIO*</label>
                <input  
                type='text'
                id="usuario"
                value={saveUser}
                onChange={(e) => setSaveUser(e.target.value)}
                /> 
                <label>CORREO ELECTRÓNICO*</label>
                <input
                type='email'
                id="correo"
                value={saveEmail}
                onChange={(e) => setSaveEmail(e.target.value)}
                /> 
                <label>CONTRASEÑA*</label>
                <PasswordInput password={savePswrd} setPassword={setSavePswrd} />
                <label>CONFIRMAR CONTRASEÑA*</label>
                <PasswordInput password={validate} setPassword={setValidate} />
                <div className="message">
                {error? (<p className="error">{errorMensaje}</p>) : (<p>{errorMensaje}</p>)}</div>
                <Button disabled={loading}>{loading ? "Registro exitoso": "REGISTRARSE"}</Button>
            
            </form>
        </div>
    </div>   
    </>
    )
}
