import { Producto } from "../types.ts";

export const mockProductos: Producto[] = [ 
    {
        id: 1,
        nombre: "Sombrero Antigravedad",
        descripcion: "Arruina el día de un caballero haciendo que su sombrero vuele por los aires.",
        creador: "Fred and George Weasley",
        advertencia: "Si te da pena mostrar tus entradas prominentes, no lo uses.",
        duracion: "Desconocida",
        precio: 3,
        cantidad: 10,
        categoria: "Bromas",
        divisa: "galeones",
        calificacion: 4,
        efectoVisual: "efecto-visual-sombrero",
        efecto: "sombrero-antigravedad",
        imagenes: [
            "..//src/assets//Anti_Gravity_Hat.jpeg",
            "..//src/assets//sombrero1.jpg",
            "..//src/assets//sombrero2.jpg",
            "..//src/assets//sombrero3.jpg"
           ],
        comentarios: [
            {
                id: 1,
                usuario: "Ron Weasley",
                contenido: "Me gusta ver a los muggles tratar de agarralos.",
                calificacion: 4,
                fecha: "2024/03/12"
            }
        ]
    },
    {
        id: 2,
        nombre: "Los irrompibles huevos de Eduardo",
        descripcion: "El truco consiste en que por más que lo intentes, no lograrás quebrarlo.",
        creador: "Desconocido",
        advertencia: "Que no sea el único huevo que tengas disponible para el desayuno.",
        duracion: "Infinita",
        precio: 1,
        cantidad: 5,
        categoria: "Bromas",
        divisa: "galeones",
        calificacion: 0,
        efectoVisual: "efecto-visual-huevo",
        efecto: "huevo",
        imagenes: [
            "..//src/assets//EduardosUnbreakableEggs.jpeg",
            "..//src/assets//EduardosUnbreakableEggs2.jpeg",
            "..//src/assets//EduardosUnbreakableEggs3.jpeg",
            "..//src/assets//EduardosUnbreakableEggs4.jpeg"],
        comentarios: []
    },
    {
        id: 3,
        nombre: "Caramelo acneico",
        descripcion: "Es un caramelo que al ser comido, hace que toda tu cara se llene de acne.",
        creador: "Fred y George Weasley",
        advertencia: "Si tienes una cita en la noche, ni se te ocurra probarlo.",
        duracion: "24 horas",
        precio: 11,
        cantidad: 100,
        categoria: "Dulces",
        divisa: "sickles",
        calificacion: 3,
        efectoVisual: "efecto-visual-granos",
        efecto: "granos",
        imagenes: ["..//src/assets//Acne.jpeg",
                    "..//src/assets//Acne1.jpeg",
                    "..//src/assets//Ance2.jpg",
                    "..//src/assets//Acne3.jpeg"
        ],
        comentarios: [ {
            id: 1,
            usuario: "Hermione Granger",
            contenido: "Es asqueroso.",
            calificacion: 1,
            fecha: "2024/03/12",
        },
        {
            id: 2,
            usuario: "Ron Weasley",
            contenido: "Jajaja no se los des a tu novia.",
            calificacion: 5,
            fecha: "2024/03/12"
        }]
    },
    {
        id: 4,
        nombre: "Caramelo longuilinguo",
        descripcion: "Son caramelos que al comersen, hacen que tu lengua se alargue.",
        creador: "Bertie Bott",
        advertencia: "Sino quieres que se arrastre tu lengua por el piso, no comas más de 1.",
        duracion: "1 minuto",
        precio: 10,
        cantidad: 200,
        categoria: "Dulces",
        divisa: "sickles",
        calificacion: 4,
        efectoVisual: "boca",
        efecto: "lengua",
        imagenes: ["..//src/assets//Lengua.jpg",
                    "..//src/assets//Lengua1.jpg",
                    "..//src/assets//Lengua2jpg.jpg",
                    "..//src/assets//Lengua3.jpg"
        ],
        comentarios: []
    },
    {
        id: 5,
        nombre: "Fuegos artificiales",
        descripcion: "Dale color a una noche oscura con una caja de nuestros fuegos artificiales, solo hay que abrir la caja para que la magia ocurra.",
        creador: "Fred y George Weasley",
        advertencia: "No dejar al alcance de los niños.",
        duracion: "Hasta que el último de la caja explote",
        precio: 45,
        cantidad: 200,
        categoria: "Explosivos",
        divisa: "sickles",
        calificacion: 5,
        efectoVisual: "",
        efecto: "firework",
        imagenes: ["..//src/assets//firework.jpg",
                    "..//src/assets//firework1.jpg",
                    "..//src/assets//firework2.jpg",
                    "..//src/assets//firework3.jpg"
        ],
        comentarios: [
        {  id: 1,
            usuario: "Pepito Perez",
            contenido: "Son muy bonitos y lo mejor es que no hay que manipularlos.",
            calificacion: 5,
            fecha: "2024/03/12",}
        ]
    }
];