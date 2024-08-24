import "../styles/Register.css"
import { NavBar } from "./navBar"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../elements/showPassword";
import { useUserForm } from "../elements/variablesGlobales";
import { usuarios } from "../elements/usuario.json"

export const RegisterForm = () =>{
    const {saveUser, setSaveUser, saveEmail, setSaveEmail, savePswrd, setSavePswrd } = useUserForm();
    const [validate, setValidate] = useState("");
    const [errorMensaje, setErrorMensaje] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const [error, setError] = useState(false);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (saveUser==="" || saveEmail==="" || savePswrd==="" || validate==="") {
            setError(true);
            setErrorMensaje("Todos los campos son obligatorios")
            return;
        } 
        else if(savePswrd.length < 8 ){
            setError(true);
            setErrorMensaje("La contraseña debe tener al menos 8 carácteres")
            return;
        }
        else if (savePswrd != validate){
            setError(true);
            setErrorMensaje("No coinciden ambos campos de contraseña")
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
            
            <form method="post" onSubmit={handleSubmit}> 
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
                {error? (<p className="error">{errorMensaje}</p>) : (<p>{errorMensaje}</p>)}
                <button disabled={loading}>{loading ? "Registro exitoso": "REGISTRARSE"}</button>
            
            </form>
        </div>
    </div>   
    </>
    )
}
