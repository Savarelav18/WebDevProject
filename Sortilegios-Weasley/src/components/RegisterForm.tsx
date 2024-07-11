import "../styles/Register.css"
import {Campotexto} from "../elements/Campotexto"
import { NavBar } from "./navBar"

export const RegisterForm = () =>{
    return (<>
    <NavBar/>
    <link rel="stylesheet" href="../styles/Register.css"></link>
    <div className="cont">
        <div className="cuadrado"> 
            <img src="src/assets/logo.png" />
        </div> 
        <div className="registro">
            <h1>REGISTRATE</h1>
            <p>¿Ya tienes cuenta?</p> 
            
            <span> <a href="/Login"> INICIA SESIÓN </a> </span> 
            
            <form method="post">
                <Campotexto nombre="USUARIO*" tipo='text' /> 
                <Campotexto nombre="CORREO ELECTRÓNICO*" tipo='email' />
                <Campotexto nombre="CONTRASEÑA*" tipo='password' />
                <Campotexto nombre="CONFIRMAR CONTRASEÑA*" tipo='password' /> 
            
            <div className="agregar" > 
                <input type="submit" value="REGISTRARSE"/>
            
            </div>

            </form>
        </div>
    </div>   
    </>
    )
}
