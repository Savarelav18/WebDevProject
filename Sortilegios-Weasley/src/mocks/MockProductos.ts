import { Producto } from "../types.ts";

export const mockProductos: Producto[] = [ 
    {
        id: 1,
        nombre: "Amortentia",
        descripcion: "Es la poción de amor más poderosa que existe. Su aroma varía según las cosas que más atraigan a la persona que la huele.",
        creador: "Desconocido",
        advertencia: "No se debe beber, ya que es una poción de amor extremadamente poderosa.",
        duracion: "Desconocida",
        precio: 100,
        cantidad: 10,
        categoria: "pociones",
        divisa: "galeones",
        calificacion: 4,
        imagenes: [
            "https://i.etsystatic.com/31749383/c/2608/2073/89/445/il/81427f/5340282818/il_680x540.5340282818_ot9e.jpg",
            "https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto/v1686937265/content-items/013/868/231/Amortentia-original.png?1686937265",
            "https://media.es.wired.com/photos/650b2a2e72d73ca3bd5ef0cc/16:9/w_2240,c_limit/Business-OpenAI-Dall-E-3-heart.jpg",
            "https://marketing4ecommerce.net/wp-content/uploads/2024/02/ias-generadoras-de-imagenes.jpg",
            "https://www.educima.com/imagen-cantar-dl15040.jpg"],
        comentarios: [
            {
                id: 1,
                usuario: "Harry Potter",
                contenido: "Es una excelente poción de amor, la recomiendo.",
                calificacion: 5,
                fecha: "2024/03/10"
            },
            {
                id: 2,
                usuario: "Hermione Granger",
                contenido: "Es una poción muy peligrosa, no se debe beber.",
                calificacion: 1,
                fecha: "2024/03/11"
            },
            {
                id: 3,
                usuario: "Ron Weasley",
                contenido: "No la he probado, pero me gustaría.",
                calificacion: 3,
                fecha: "2024/03/12"
            },
        ]
    },
    {
        id: 2,
        nombre: "Felix Felicis",
        descripcion: "Es una poción que otorga buena suerte a quien la bebe. El efecto dura aproximadamente 24 horas.",
        creador: "Desconocido",
        advertencia: "No se debe beber en grandes cantidades, ya que puede causar euforia excesiva y comportamiento irracional.",
        duracion: "24 horas",
        precio: 200,
        cantidad: 5,
        categoria: "pociones",
        divisa: "galeones",
        calificacion: 5,
        imagenes: [
            "https://merlinsbeard.shop/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-14-at-1.55.05-PM.jpeg",
            "https://merlinsbeard.shop/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-14-at-1.55.07-PM.jpeg",
            "https://merlinsbeard.shop/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-14-at-1.55.06-PM-1.jpeg"],
        comentarios: []
    },
    {
        id: 3,
        nombre: "Caramelo longuilinguo",
        descripcion: "Es un caramelo que al ser comido, hace que la lengua del consumidor se alargue.",
        creador: "Fred y George Weasley",
        advertencia: "No se debe comer en grandes cantidades, ya que puede causar malestar estomacal.",
        duracion: "Desconocida",
        precio: 5,
        cantidad: 100,
        categoria: "dulces",
        divisa: "sickles",
        calificacion: 3,
        imagenes: [
            "https://i.ytimg.com/vi/yIo-KT7BstM/maxresdefault.jpg"
        ],
        comentarios: []
    },
    {
        id: 4,
        nombre: "Bertie Botts de todos los sabores",
        descripcion: "Son caramelos de gelatina que tienen sabores normales y sabores desagradables.",
        creador: "Bertie Bott",
        advertencia: "No se debe comer en grandes cantidades, ya que puede causar malestar estomacal.",
        duracion: "Desconocida",
        precio: 10,
        cantidad: 200,
        categoria: "dulces",
        divisa: "sickles",
        calificacion: 4,
        imagenes: ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.falabella.com.co%2Ffalabella-co%2Fproduct%2F121984350%2FGRAJEAS-DULCE-BERTIE-BOTTS-harry-potter-sabor-desagradable%2F121984353&psig=AOvVaw2DlBi8GL_iO5Fu67657f8w&ust=1721898592845000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiPjaGqv4cDFQAAAAAdAAAAABAR",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Flamadrigueraqm.mercadoshops.com.mx%2FMLM-709754912-grageas-de-todos-los-sabores-bertie-botts-harry-potter-_JM&psig=AOvVaw2DlBi8GL_iO5Fu67657f8w&ust=1721898592845000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiPjaGqv4cDFQAAAAAdAAAAABBA"
        ],
        comentarios: []
    }
];