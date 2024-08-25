import { Producto } from "../types.ts";

export const mockProductos: Producto[] = [ 
    {
        id: 1,
        nombre: "Los Huevos Irrompibles de Eduardo",
        descripcion: "Los Huevos Irrompibles de Eduardo eran un producto de trucos mágicos de la línea Magia Muggle de Sortilegios Weasley. El truco consistía en huevos que no podían romperse.",
        creador: "Fred y George Weasley",
        advertencia: "No se debe usar para cocinar.",
        duracion: "Desconocida",
        precio: 100,
        cantidad: 10,
        categoria: "Bromas",
        divisa: "galeones",
        calificacion: 4,
        efectoVisual: "efecto-visual-huevo",
        efecto: "huevo",
        imagenes: [
            "..//src/assets//EduardosUnbreakableEggs.jpeg",
            "..//src/assets//EduardosUnbreakableEggs2.jpeg",
            "..//src/assets//EduardosUnbreakableEggs3.jpeg",
            "..//src/assets//EduardosUnbreakableEggs4.jpeg"],
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
        categoria: "Dulces",
        divisa: "galeones",
        calificacion: 5,
        efectoVisual: "efecto-visual-sombrero",
        efecto: "sombrero-antigravedad",
        imagenes: [
            "..//src/assets//Anti_Gravity_Hat.jpeg",
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
        categoria: "Dulces",
        divisa: "sickles",
        calificacion: 3,
        efectoVisual: "efecto-visual-granos",
        efecto: "granos",
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
        categoria: "Explosivos",
        divisa: "sickles",
        calificacion: 4,
        efectoVisual: "efecto-visual-sombrero",
        efecto: "sombrero-antigravedad",
        imagenes: ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.falabella.com.co%2Ffalabella-co%2Fproduct%2F121984350%2FGRAJEAS-DULCE-BERTIE-BOTTS-harry-potter-sabor-desagradable%2F121984353&psig=AOvVaw2DlBi8GL_iO5Fu67657f8w&ust=1721898592845000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiPjaGqv4cDFQAAAAAdAAAAABAR",
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Flamadrigueraqm.mercadoshops.com.mx%2FMLM-709754912-grageas-de-todos-los-sabores-bertie-botts-harry-potter-_JM&psig=AOvVaw2DlBi8GL_iO5Fu67657f8w&ust=1721898592845000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiPjaGqv4cDFQAAAAAdAAAAABBA"
        ],
        comentarios: []
    }
];