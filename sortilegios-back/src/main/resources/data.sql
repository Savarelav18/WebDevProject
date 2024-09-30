INSERT INTO categoria (id, nombre) VALUES (1, 'Bromas');
INSERT INTO categoria (id, nombre) VALUES (2, 'Dulces');
INSERT INTO categoria (id, nombre) VALUES (3, 'Explosivos');

INSERT INTO divisa (id,nombre) VALUES (1, 'galeones');
INSERT INTO divisa (id,nombre) VALUES (2, 'sickles');
INSERT INTO divisa (id,nombre) VALUES (3, 'knuts');

INSERT INTO producto (id, nombre, descripcion, creador, advertencia, duracion, precio, stock, divisa_id, categoria_id, efecto_visual, efecto)
VALUES (1, 'Sombrero Antigravedad', 'Arruina el día de un caballero haciendo que su sombrero vuele por los aires.', 'Fred and George Weasley', 'Si te da pena mostrar tus entradas prominentes, no lo uses.', 'Desconocida', 3, 50, 1,1, 'efecto-visual-sombrero', 'sombrero-antigravedad');

INSERT INTO producto (id, nombre, descripcion, creador, advertencia, duracion, precio, stock, divisa_id, categoria_id, efecto_visual, efecto)
VALUES (2, 'Los irrompibles huevos de Eduardo', 'El truco consiste en que por más que lo intentes, no lograrás quebrarlo.', 'Desconocido', 'Que no sea el único huevo que tengas disponible para el desayuno.', 'Infinita', 1, 100, 1, 1, 'efecto-visual-huevo', 'huevo');

INSERT INTO producto (id, nombre, descripcion, creador, advertencia, duracion, precio, stock, divisa_id, categoria_id, efecto_visual, efecto)
VALUES (3, 'Caramelo acneico', 'Es un caramelo que al ser comido, hace que toda tu cara se llene de acne.', 'Fred and George Weasley', 'Si tienes una cita en la noche, ni se te ocurra probarlo.', '24 Horas', 11, 20, 2, 2, 'efecto-visual-granos', 'granos');

INSERT INTO producto (id, nombre, descripcion, creador, advertencia, duracion, precio, stock, divisa_id, categoria_id, efecto_visual, efecto)
VALUES (4, 'Caramelo longuilinguo', 'Son caramelos que al comersen, hacen que tu lengua se alargue.', 'Bertie Bott', 'Sino quieres que se arrastre tu lengua por el piso, no comas más de 1.', '1 minuto', 10, 200, 2, 2, 'boca', 'lengua');

INSERT INTO producto (id, nombre, descripcion, creador, advertencia, duracion, precio, stock, divisa_id, categoria_id, efecto_visual, efecto)
VALUES (5, 'Fuegos artificiales', 'Dale color a una noche oscura con una caja de nuestros fuegos artificiales, solo hay que abrir la caja para que la magia ocurra.', 'Fred and George Weasley', 'No dejar al alcance de los niños.', 'Hasta que el último de la caja explote', 45, 50, 2, 3, '', 'firework');


INSERT INTO imagen (id, producto_id, url) VALUES (1, 1, '..//src/assets//Anti_Gravity_Hat.jpeg');

INSERT INTO imagen (id, producto_id, url) VALUES (2, 1, '..//src/assets//sombrero1.jpg');

INSERT INTO imagen (id, producto_id, url) VALUES (3, 1, '..//src/assets//sombrero2.jpg');

INSERT INTO imagen (id, producto_id, url) VALUES (4, 1, '..//src/assets//sombrero3.jpg');

INSERT INTO imagen (id, producto_id, url) VALUES (5, 2, '..//src/assets//EduardosUnbreakableEggs.jpeg');

INSERT INTO imagen (id, producto_id, url) VALUES (6, 2, '..//src/assets//EduardosUnbreakableEggs2.jpeg');

INSERT INTO imagen (id, producto_id, url) VALUES (7, 2, '..//src/assets//EduardosUnbreakableEggs3.jpeg');

INSERT INTO imagen (id, producto_id, url) VALUES (8, 2, '..//src/assets//EduardosUnbreakableEggs4.jpeg');

INSERT INTO imagen (id, producto_id, url) VALUES (9, 3, '..//src/assets//Acne.jpeg');

INSERT INTO imagen (id, producto_id, url) VALUES (10, 3, '..//src/assets//Acne1.jpeg');

INSERT INTO imagen (id, producto_id, url) VALUES (11, 3, '..//src/assets//Acne2.jpeg');

INSERT INTO imagen (id, producto_id, url) VALUES (12, 3, '..//src/assets//Acne3.jpeg');

INSERT INTO imagen (id, producto_id, url) VALUES (13, 4, '..//src/assets//Lengua.jpg');

INSERT INTO imagen (id, producto_id, url) VALUES (14, 4, '..//src/assets//Lengua1.jpg');

INSERT INTO imagen (id, producto_id, url) VALUES (15, 4, '..//src/assets//Lengua2jpg.jpg');

INSERT INTO imagen (id, producto_id, url) VALUES (16, 4, '..//src/assets//Lengua3.jpg');

INSERT INTO imagen (id, producto_id, url) VALUES (17, 5, '..//src/assets//firework.jpg');

INSERT INTO imagen (id, producto_id, url) VALUES (18, 5, '..//src/assets//firework1.jpg');

INSERT INTO imagen (id, producto_id, url) VALUES (19, 5, '..//src/assets//firework2.jpg');

INSERT INTO imagen (id, producto_id, url) VALUES (20, 5, '..//src/assets//firework3.jpg');

INSERT INTO usuario (username, password, email, rol) VALUES ('admin', 'admin', 'admin@mail.com', 'ADMIN');