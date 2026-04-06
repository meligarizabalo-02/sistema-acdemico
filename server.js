import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Admin2807*",
  database: "sistema_acdemico",
  port: 3307
});

db.connect((err) => {
  if (err) {
    console.log("Error conectando a MySQL:", err);
  } else {
    console.log("Conectado a MySQL");
  }
});

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

/* API LOGIN */
app.post("/login", (req, res) => {

  const { user, password } = req.body;

  const sql = "SELECT * FROM usuarios WHERE usuario = ? AND password = ?";

  db.query(sql, [user, password], (err, result) => {

    if (err) {
      return res.json({
        success: false,
        mensaje: "Error en el servidor"
      });
    }

    if (result.length > 0) {
      res.json({
        success: true,
        mensaje: "Login correcto"
      });
    } else {
      res.json({
        success: false,
        mensaje: "Usuario o contraseña incorrectos"
      });
    }

  });

});

// REGISTRO
app.post('/registro', (req, res) => {
  const { user, password } = req.body;

  const sql = "INSERT INTO usuarios (usuario, password) VALUES (?, ?)";

  db.query(sql, [user, password], (err, result) => {
    if (err) {
      return res.json({
        success: false,
        mensaje: "Error al registrar usuario"
      });
    }

    res.json({
      success: true,
      mensaje: "Usuario registrado correctamente"
    });
  });
});

app.listen(3001, () => {
  console.log("Servidor corriendo en http://localhost:3001");
});