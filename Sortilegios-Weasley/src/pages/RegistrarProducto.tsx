import React, { useState } from "react";
import { NavBar } from "../components/navBar";
import { Button, Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

export const RegistrarProducto: React.FC = () => {

    interface registerProductprops {
        nombre: string;
        descripcion: string;
        creador: string;
        advertencia: string;
        duracion: string;
        precio: number;
        cantidad: number;
        categoria:string;
        divisa:string;
        imagenes: string[]; // Lista de URLs de imágenes
    }

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

    const { register, handleSubmit, setValue} = useForm<registerProductprops>({
        defaultValues: {
            imagenes: [] 
        }
    });

    const [imageUrl, setImageUrl] = useState<string>(""); 
    const [imagenes, setImagenes] = useState<string[]>([]); 

    
    const handleAddImageUrl = () => {
        if (imageUrl) {
            
            const updatedImages = [...imagenes, imageUrl]; 
            setImagenes(updatedImages); 
            setValue("imagenes", updatedImages);
            setImageUrl(""); 
        }
    };

    const onSubmit = handleSubmit(async (data: registerProductprops) => {
        const response = await axios.post("http://localhost:8080/productos",data)
        console.log(response)
        if (response.status === 201) {
            notifySuccess("Producto registrado correctamente")
            
          }else{
            notifyError("No fue posible registrar el producto")
          }
        
    });

    return (
        <>
            <NavBar />
            <Container style={{ color: "white", maxWidth: "60%", marginTop: "0" }}>
                <h2>Registrar productos</h2>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="formProductName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="Ingresa el nombre del producto"
                            {...register("nombre", { required: true })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control
                            type="textarea"
                            placeholder="Ingresa una pequeña descripción del producto"
                            {...register("descripcion", { required: true })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCreator">
                        <Form.Label>Creador</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="Creador del producto"
                            {...register("creador", { required: true })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formWarning">
                        <Form.Label>Advertencia</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="Advertencias a tener en cuenta del producto"
                            {...register("advertencia", { required: true })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDuration">
                        <Form.Label>Duración</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="Duración del producto"
                            {...register("duracion", { required: true })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPrice">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="Precio del producto"
                            {...register("precio", { required: true })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formQuantity">
                        <Form.Label>Cantidad disponible</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Cantidad disponible"
                            {...register("cantidad", { required: true })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formQuantity">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Select aria-label="Default select example" {...register("categoria",{ required: true })}>
                        <option>Selecciona una categoria</option>
                        <option value="Bromas">Bromas</option>
                        <option value="Dulces">Dulces</option>
                        <option value="Explosivos">Explosivos</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formQuantity">
                    <Form.Label>Divisa</Form.Label>
                    <Form.Select aria-label="Default select example" {...register("divisa",{ required: true })}>
                        <option>Selecciona una categoria</option>
                        <option value="galeones">Galeones</option>
                        <option value="sickles">Sickles</option>
                        <option value="knuts">Knuts</option>
                    </Form.Select>
                    </Form.Group>

                    {/* Agregar URL de imagen */}
                    <Form.Group className="mb-3" controlId="formImageUrl">
                        <Form.Label>Agregar imagen desde URL</Form.Label>
                        <Form.Control
                            type="input"
                            placeholder="Ingresa el enlace de la imagen"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)} // Actualiza el estado local
                        />
                        <Button variant="primary" style={{ marginTop: '10px' }} onClick={handleAddImageUrl}>
                            Agregar URL
                        </Button>
                    </Form.Group>

                    {/* Mostrar lista de URLs de imágenes agregadas */}
                    {imagenes.length > 0 && (
                        <ul>
                            {imagenes.map((img, index) => (
                                <li key={index}>{img}</li> // Muestra la lista de URLs agregadas
                            ))}
                        </ul>
                    )}

                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </Container>
        </>
    );
};
