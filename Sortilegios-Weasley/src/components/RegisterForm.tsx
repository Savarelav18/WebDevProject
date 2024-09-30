import "../styles/Register.css";
import { NavBar } from "./navBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import PasswordInput from "../elements/showPassword"; // Importa el componente de contraseña modificado

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    if (password !== confirmPassword) {
      setErrorMensaje("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);
    setErrorMensaje("");

    try {
      const response = await axios.get(`http://localhost:8080/api/usuarios/${data.username}`);
      if (response.status === 200) {
        setErrorMensaje("El nombre de usuario ya está registrado. Elige otro.");
        setLoading(false);
        return;
      }
      
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        try {
          await axios.post("http://localhost:8080/api/usuarios", {
            username: data.username,
            email: data.email,
            password: password, 
          });
          
          setTimeout(() => {
            setLoading(false);
            navigate("/Login");
          }, 2000);

        } catch (postError) {
          setErrorMensaje("Ocurrió un error durante el registro");
          setLoading(false);
        }
      } else {
        setErrorMensaje("Ocurrió un error al validar el nombre de usuario.");
        setLoading(false);
      }
    }
  };

  return (
    <>
      <NavBar />
      <div className="cont">
        <div className="cuadrado"> 
            <img src="src/assets/logo2.png" />
        </div> 
            <div className="registro">
              <h1>REGISTRATE</h1>
              <p>¿Ya tienes cuenta?</p>
              <span><a href="/Login">INICIA SESIÓN</a></span>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formUsername" className="mb-3">
                  <Form.Label>USUARIO*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Introduce tu nombre de usuario"
                    {...register('username', { required: "El nombre de usuario es obligatorio" })}
                  />
                  {errors.username && <p className="error">{errors.username.message}</p>}
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>CORREO ELECTRÓNICO*</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Introduce tu correo electrónico"
                    {...register('email', {
                      required: "El correo electrónico es obligatorio",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "El formato del correo no es válido"
                      }
                    })}
                  />
                  {errors.email && <p className="error">{errors.email.message}</p>}
                </Form.Group>
                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>CONTRASEÑA*</Form.Label>
                  <PasswordInput
                    password={password}
                    setPassword={setPassword}
                  />
                  {errors.password && <p className="error">{errors.password.message}</p>}
                </Form.Group>
                <Form.Group controlId="formConfirmPassword" className="mb-3">
                  <Form.Label>CONFIRMAR CONTRASEÑA*</Form.Label>
                  <PasswordInput
                    password={confirmPassword}
                    setPassword={setConfirmPassword}
                  />
                  {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
                </Form.Group>

                <div className="message">
                  {errorMensaje && <p className="error">{errorMensaje}</p>}
                </div>

                <Button variant="primary" type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <Spinner animation="border" size="sm" /> ¡Registro exitoso!
                    </>
                  ) : (
                    "REGISTRARSE"
                  )}
                </Button>
              </Form>
            </div>
          </div>
    </>
  );
};
