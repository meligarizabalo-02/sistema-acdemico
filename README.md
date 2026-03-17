# Sistema Integral Acdémico

La primera parte de este proyecto consiste en un sistema de autenticación de usuarios para un sistema académico.

El sistema permite que los usuarios ingresen su usuario y contraseña para validar su autenticación.

## Tecnologías utilizadas

- React
- Node.js
- Express
- MySQL

## Instalación del proyecto

1. Clonar el repositorio

2. Instalar las dependencias

npm install

3. Crear la base de datos ejecutando el archivo:

database.sql

4. Ejecutar el servidor backend

node server.js

5. Ejecutar el frontend

npm run dev

## Usuarios de prueba

| Usuario | Contraseña |
|--------|--------|
| melina | 2807 |
| anthony | 0728 |
| admin | admin123 |

## Descripción

El sistema envía el usuario y la contraseña desde el frontend al servidor mediante un servicio web.  
El servidor valida las credenciales consultando la base de datos y devuelve un mensaje de autenticación satisfactoria o error en la autenticación.