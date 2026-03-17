CREATE DATABASE sistema_acdemico;
USE sistema_academico;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  correo VARCHAR(100),
  usuario VARCHAR(50),
  password VARCHAR(50),
  rol VARCHAR(50)
);

INSERT INTO usuarios (nombre, correo, usuario, password, rol) VALUES
("Melina Rivera", "melina@gmail.com", "melina", "2807", "estudiante"),
("Anthony Buelvas", "anthony@gmail.com", "anthony", "0728", "estudiante"),
("Admin Sistema", "admin@gmail.com", "admin", "admin123", "admin");