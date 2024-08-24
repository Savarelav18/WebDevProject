import { Producto } from "../types.ts";

export const mockProductos: Producto[] = [ 
    {
        id: 1,
        nombre: "Sombrero Antigravedad",
        descripcion: "Arruina el día de un caballero haciendo que su sombrero vuele por los aires.",
        creador: "Fred and George Weasley",
        advertencia: "Si te da pena mostrar tus entradas prominentes, no lo uses.",
        duracion: "Desconocida",
        precio: 100,
        cantidad: 10,
        categoria: "pociones",
        divisa: "galeones",
        calificacion: 4,
        efectoVisual: "efecto-visual-sombrero",
        efecto: "sombrero-antigravedad",
        imagenes: [
            "https://static.wikia.nocookie.net/harrypotter/images/0/03/Anti_Gravity_Hat.gif"],
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
        efectoVisual: "efecto-visual-huevo",
        efecto: "huevo",
        imagenes: [
            "https://static.wikia.nocookie.net/harrypotter/images/7/7a/EduardosUnbreakableEggs.jpg"],
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
        efectoVisual: "efecto-visual-granos",
        efecto: "granos",
        imagenes: [
            "https://i.ytimg.com/vi/yIo-KT7BstM/maxresdefault.jpg"
        ],
        comentarios: []
    },
    {
        id: 4,
        nombre: "Lengua de serpiente",
        descripcion: "Son caramelos que te alargan la lengua.",
        creador: "Bertie Bott",
        advertencia: "Sino quieres que se arrastre tu lengua por el piso, no comas más de 1.",
        duracion: "1 minuto",
        precio: 10,
        cantidad: 200,
        categoria: "dulces",
        divisa: "sickles",
        calificacion: 4,
        efectoVisual: "",
        efecto: "lengua",
        imagenes: ["https://image.lexica.art/full_webp/2757f017-5ae4-47a5-8e2e-a0aaf28c33fc"
        ],
        comentarios: []
    }
];