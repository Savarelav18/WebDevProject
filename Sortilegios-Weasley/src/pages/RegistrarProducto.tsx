import React, { useState } from "react";
import { NavBar } from "../components/navBar";
import { Button, Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

export const RegistrarProducto: React.FC = () => {
    const [images, setImages] = useState<(File | string)[]>([]); // Puede ser archivo o URL (string)
    const [imageUrl, setImageUrl] = useState<string>(""); // Para guardar temporalmente la URL
    const [inputType, setInputType] = useState<string>("image"); // Tipo de entrada (image o url)

    // Manejar la selección de múltiples imágenes
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImages([...images, ...Array.from(e.target.files)]);
        }
    };

    // Manejar la adición de una imagen desde una URL
    const handleAddImageUrl = () => {
        if (imageUrl) {
            setImages([...images, imageUrl]);
            setImageUrl(""); // Limpiar el campo después de agregar la URL
        }
    };

    // Eliminar una imagen de la lista
    const handleRemoveImage = (index: number) => {
        setImages(images.filter((_, i) => i !== index));
    };

    // Función para renderizar la lista de imágenes seleccionadas de forma horizontal
    const renderImageList = () => {
        return images.map((image, index) => {
            const isUrl = typeof image === 'string'; // Verificar si es una URL o un archivo
            const imageURL = isUrl ? image : URL.createObjectURL(image as File);

            return (
                <div key={index} style={{ marginRight: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={imageURL} alt={`preview-${index}`} style={{ width: '100px', height: '100px', objectFit: 'cover', marginBottom: '10px' }} />
                    <Button variant="danger" size="sm" onClick={() => handleRemoveImage(index)}>Eliminar</Button>
                </div>
            );
        });
    };

    // Manejar el envío del formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();

        images.forEach((image, index) => {
            if (typeof image === 'string') {
                // Si es una URL, solo la enviamos como string
                formData.append(`image${index}`, image);
            } else {
                // Si es un archivo, lo agregamos como archivo
                formData.append(`image${index}`, image);
            }
        });

        // Aquí podrías realizar la solicitud POST con formData para enviar las imágenes junto con los otros datos
        console.log("Imágenes seleccionadas: ", images);
    };

    return (
        <>
            <NavBar />
            <Container style={{ color: "white", maxWidth: "60%", marginTop: "0" }}>
                <h2>Registrar productos</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formProductName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="input" placeholder="Ingresa el nombre del producto" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control as="textarea" placeholder="Ingresa una pequeña descripción del producto" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCreator">
                        <Form.Label>Creador</Form.Label>
                        <Form.Control type="input" placeholder="Creador del producto" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formWarning">
                        <Form.Label>Advertencia</Form.Label>
                        <Form.Control type="input" placeholder="Advertencias a tener en cuenta del producto" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formDuration">
                        <Form.Label>Duración</Form.Label>
                        <Form.Control type="input" placeholder="Duración del producto" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPrice">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type="input" placeholder="Precio del producto" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formQuantity">
                        <Form.Label>Cantidad disponible</Form.Label>
                        <Form.Control type="number" placeholder="Cantidad disponible" />
                    </Form.Group>

                    {/* Selector de tipo de entrada (Imagen o URL) */}
                    <Form.Group className="mb-3" controlId="formImageType">
                        <Form.Label>Selecciona el tipo de imagen</Form.Label>
                        <div key="inline-radio" className="mb-3">
                            <Form.Check
                                inline
                                label="Subir Imagen"
                                type="radio"
                                id="radio-image"
                                name="imageType"
                                value="image"
                                checked={inputType === "image"}
                                onChange={(e) => setInputType(e.target.value)}
                            />
                            <Form.Check
                                inline
                                label="Agregar URL"
                                type="radio"
                                id="radio-url"
                                name="imageType"
                                value="url"
                                checked={inputType === "url"}
                                onChange={(e) => setInputType(e.target.value)}
                            />
                        </div>
                    </Form.Group>

                    {/* Mostrar input según el tipo seleccionado */}
                    {inputType === "image" ? (
                        <Form.Group className="mb-3" controlId="formImages">
                            <Form.Label>Imágenes del producto</Form.Label>
                            <Form.Control type="file" multiple onChange={handleFileChange} />
                        </Form.Group>
                    ) : (
                        <Form.Group className="mb-3" controlId="formImageUrl">
                            <Form.Label>Agregar imagen desde URL</Form.Label>
                            <Form.Control
                                type="input"
                                placeholder="Ingresa el enlace de la imagen"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                            />
                            <Button variant="primary" style={{ marginTop: '10px' }} onClick={handleAddImageUrl}>
                                Agregar URL
                            </Button>
                        </Form.Group>
                    )}

                    {/* Mostrar la lista de imágenes seleccionadas en forma horizontal */}
                    <div className="image-list" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginBottom: '20px' }}>
                        {renderImageList()}
                    </div>

                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </Container>
        </>
    );
};
