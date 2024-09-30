import "../styles/Login.css";
import { NavBar } from "./navBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../elements/showPassword"; 
import { Form, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from 'axios';

interface LoginFormData {
    username: string;
    password: string;
}

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
    const [password, setPassword] = useState(""); // Estado para la contraseña
    const [loading, setLoading] = useState(false);
    const [errorMensaje, setErrorMensaje] = useState("");
    const navigate = useNavigate();

    const notifySuccess = (message: string) => {
      toast.success(message, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    };

    const onSubmit = async (data: LoginFormData) => {
      setLoading(true);
      setErrorMensaje("");

      try {
        // Hacemos una solicitud POST a la API para validar el inicio de sesión
        const response = await axios.get(`http://localhost:8080/api/usuarios/${data.username}`, {
        });

        console.log(response)

        if (response.status === 200) {
            if (data.username === response.data.username && password === response.data.password){
            setTimeout(() => {
              setLoading(false);
              notifySuccess("¡La cámara de los secretos ha sido abierta!");
              window.localStorage.setItem("isLogedIn", "true");
              window.localStorage.setItem("username", response.data.username);
              window.localStorage.setItem("rol", response.data.rol); 
              navigate('/');
              
            }, 1000); 
            }
          }
        } catch (error: any) {
          setLoading(false);
          if (error.response && error.response.status === 401) {
            setErrorMensaje("Usuario o contraseña incorrectos.");
          } else {
            setErrorMensaje("Ocurrió un error al intentar iniciar sesión.");
          }
        }
      };

    return (
      <>
        <NavBar />
        <div className="content">
          <div className="formulario">
            <h1>INICIA SESIÓN</h1>
            <p>¿Aún no tienes cuenta?</p>
            <span>
              <a href="/Register">REGISTRATE</a>
            </span>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="formUsername" className="mb-3">
                <Form.Label>USUARIO*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Introduce tu nombre de usuario"
                  {...register('username', { required: "El nombre de usuario es obligatorio" })}
                />
                {errors.username && <p className="mensaje">{errors.username.message}</p>}
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>CONTRASEÑA*</Form.Label>
                <PasswordInput password={password} setPassword={setPassword} />
                {errors.password && <p className="mensaje">{errors.password.message}</p>}
              </Form.Group>

              <div className="mensaje">
                {errorMensaje && <p className="mensaje">{errorMensaje}</p>}
              </div>

              <Button variant="primary" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Spinner animation="border" size="sm" /> "✨¡Alohomora!🔑"
                  </>
                ) : (
                  "INICIAR SESIÓN"
                )}
              </Button>
            </Form>
          </div>
          <div className="imagen">
            <img src="src/assets/logo.png" alt="Logo" />
          </div>
        </div>
      </>
    );
};
