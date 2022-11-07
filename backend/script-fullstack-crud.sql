SELECT * FROM workflix.usuarios_profesionales;

INSERT INTO usuarios_profesionales (nombre, apellido, email, contrasena, foto_perfil, telefono, localidad, provincia, profesion, descripcion, calificacion_obtenida)
VALUES("juan","perez","jp@gmail.com","admin","fotourljp.imagen.com","3515644868", "Cordoba", "Cordoba","electricista","",7 );
INSERT INTO usuarios_profesionales (nombre, apellido, email, contrasena, foto_perfil, telefono, localidad, provincia, profesion, descripcion, calificacion_obtenida)
VALUES("Pablo","garay","pg@gmail.com","root","fotourlpg.imagen.com","3515644861", "Villa Maria", "Cordoba","gasista","",6 );
INSERT INTO usuarios_profesionales (nombre, apellido, email, contrasena, foto_perfil, telefono, localidad, provincia, profesion, descripcion, calificacion_obtenida)
VALUES("Emiliano","Rodriguez","er@gmail.com","admin","fotourl.imagen.com","3515644862", "Capital", "Buenos Aires","plomero","",7 );
INSERT INTO usuarios_profesionales (nombre, apellido, email, contrasena, foto_perfil, telefono, localidad, provincia, profesion, descripcion, calificacion_obtenida)
VALUES("Luciano","Lopez","ll@gmail.com","root","fotourl.imagen.com","3515644834", "Tigre", "Buenos Aires","piletero","",7 );
INSERT INTO usuarios_profesionales (nombre, apellido, email, contrasena, foto_perfil, telefono, localidad, provincia, profesion, descripcion, calificacion_obtenida)
VALUES("Maria","Moreno","mm@gmail.com","admin","fotourl.imagen.com","3515644567", "San Francisco", "Cordoba","pintora","",7 );
INSERT INTO usuarios_profesionales (nombre, apellido, email, contrasena, foto_perfil, telefono, localidad, provincia, profesion, descripcion, calificacion_obtenida)
VALUES("Laura","Garcia","lg@gmail.com","root","fotourl.imagen.com","3515644999", "Rosario", "Santa Fe","pintora","",7 );
INSERT INTO usuarios_profesionales (nombre, apellido, email, contrasena, foto_perfil, telefono, localidad, provincia, profesion, descripcion, calificacion_obtenida)
VALUES("Romualdo","Caseres","rc@gmail.com","admin","fotourl.imagen.com","3515644001", "", "Corrientes","yesero","",7 );

UPDATE usuarios_profesionales SET localidad = "Corrientes" WHERE id =7;

INSERT INTO usuarios_clientes (nombre, apellido,foto_perfil, email, contrasena)
VALUES("Lucia","Galan","fotourllg.imagen.com","lg@gmail.com","pass");
INSERT INTO usuarios_clientes (nombre, apellido,foto_perfil, email, contrasena)
VALUES("Laura","Flores","fotourllf.imagen.com","lf@gmail.com","password");
INSERT INTO usuarios_clientes (nombre, apellido,foto_perfil, email, contrasena)
VALUES("Pablo","Ramirez","fotourlpr.imagen.com","rp@gmail.com","admin");
INSERT INTO usuarios_clientes (nombre, apellido,foto_perfil, email, contrasena)
VALUES("Juan","Gomez","fotourljg.imagen.com","jg@gmail.com","admin");
INSERT INTO usuarios_clientes (nombre, apellido,foto_perfil, email, contrasena)
VALUES("Marcelo","Delgado","fotourlmd.imagen.com","md@gmail.com","admin");
INSERT INTO usuarios_clientes (nombre, apellido,foto_perfil, email, contrasena)
VALUES("Martin","Palermo","fotourlmp.imagen.com","mp@gmail.com","pass");

DELETE FROM usuarios_clientes WHERE id = 1;

INSERT INTO contrataciones (fecha, valoracion, comentario, id_cliente, id_profesional)
VALUES("2022-10-22 00:00:00", 7,"",2,4);
INSERT INTO contrataciones (fecha, valoracion, comentario, id_cliente, id_profesional)
VALUES("2022-09-21 00:00:00", 8,"",4,3);
INSERT INTO contrataciones (fecha, valoracion, comentario, id_cliente, id_profesional)
VALUES("2022-05-20 00:00:00", 9,"",5,1);
INSERT INTO contrataciones (fecha, valoracion, comentario, id_cliente, id_profesional)
VALUES("2022-04-12 00:00:00", 3,"",3,6);
INSERT INTO contrataciones (fecha, valoracion, comentario, id_cliente, id_profesional)
VALUES("2020-08-15 00:00:00", 5,"",2,1);
INSERT INTO contrataciones (fecha, valoracion, comentario, id_cliente, id_profesional)
VALUES("2021-10-07 00:00:00", 1,"",4,6);
INSERT INTO contrataciones (fecha, valoracion, comentario, id_cliente, id_profesional)
VALUES("2021-01-10 00:00:00", 8,"",5,2);

SELECT uc.nombre, uc.apellido, c.valoracion, up.nombre, up.apellido FROM usuarios_clientes uc
INNER JOIN contrataciones c ON uc.id = c.id_cliente
INNER JOIN usuarios_profesionales up ON up.id = c.id_profesional;




 