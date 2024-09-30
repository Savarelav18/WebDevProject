import { Button, FormLabel } from "react-bootstrap";
import snitchLlena from '../../assets/snitch.png'
import { ChangeEvent, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

interface ComentarioFormData {
    calificacion: number;
    comentario: string;
    productoId: number;
    username: string;
    titulo:string;
}

export function CrearComentario() {
    const { productId } = useParams();
    const { register, handleSubmit, setValue } = useForm<ComentarioFormData>();
    const [calificacion, setCalificacion] = useState(-1); // Estado para la calificación seleccionada
    const login = window.localStorage.getItem("isLogedIn");
    const username = window.localStorage.getItem("username") || "Usuario Anónimo";
    const navigate = useNavigate()
    

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

    const notifyError = (message: string) => {
        toast.error(message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    // Set the username on form load
    useEffect(() => {
        setValue("username", username);
        setValue("productoId",Number(productId)||0)
        setValue("titulo",username||"NA")
    }, [username,productId, setValue]);

    // Actualiza el valor de "calificacion" en el formulario cuando cambia la calificación seleccionada
    const handleClick = (valor: number) => {
        setCalificacion(valor);
        setValue("calificacion", valor); // Vincula calificación con register
    };

    // Actualiza el valor de "comentario" en el formulario cuando cambia el comentario
    const changeComentario = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newComentario = e.target.value;
        setValue("comentario", newComentario); // Vincula comentario con register
    };

    const onComentarioSubmit = async (data: ComentarioFormData) => {
        if (!login) {
            alert("Debe estar logueado para continuar.");
            window.location.href = "/Login";
            return;
        }
        if (calificacion === -1 || !data.comentario) {
            alert("Debes seleccionar una calificación y escribir un comentario");
            return;
        }

       const response = await axios.post("http://localhost:8080/api/resenas",data)
       if (response.status === 200) {
        notifySuccess("Comentario registrado correctamente")
        
      }else{
        notifyError("No fue posible registrar el comentario")
      }
      setTimeout(() => {
        navigate(0);
        
      }, 2000); 
    };

    return (
        <div className="crear-comentario">
            <h2 className="deja-comentario">Deja tu reseña</h2>
            <form onSubmit={handleSubmit(onComentarioSubmit)} style={{ display: "flex", flexDirection: "column" }}>
                <FormLabel style={{ fontSize: "18px", fontWeight: "bold" }}>Calificación</FormLabel>
                <div className="calificacion-snitch">
                    {[1, 2, 3, 4, 5].map((valor) => (
                        <Button key={valor} onClick={() => handleClick(valor)} style={{ backgroundColor: "transparent", border: "none", width: "35px", height: "35px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img
                                src={snitchLlena}
                                alt="Snitch"
                                style={{ opacity: valor <= calificacion ? 1 : 0.5 }} // 100% opaco si el botón es menor o igual a la calificación, 50% si no
                            />
                        </Button>
                    ))}
                </div>

                <FormLabel style={{ fontSize: "18px", fontWeight: "bold" }}>Comentario</FormLabel>
                <textarea
                    className="area-comentario"
                    {...register("comentario", { required: true })} // Register del comentario
                    onChange={changeComentario}
                />

                <input type="submit" className="boton-azul der" value="Enviar" />
            </form>
        </div>
    );
}
