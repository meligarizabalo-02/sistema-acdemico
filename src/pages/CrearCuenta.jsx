import { useState } from "react";
import { Link } from "react-router-dom";

function CrearCuenta() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    password: "",
    confirmarPassword: "",
    rol: "estudiante"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmarPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    alert("Cuenta creada correctamente 🎉");
    console.log(formData);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Crear Cuenta</h2>
        <p>Completa el formulario para registrarte</p>

        <form onSubmit={handleSubmit}>
          <label>Nombre Completo</label>
          <input
            type="text"
            name="nombre"
            placeholder="Ingrese su nombre"
            value={formData.nombre}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label>Correo Electrónico</label>
          <input
            type="email"
            name="correo"
            placeholder="Ingrese su correo"
            value={formData.correo}
            onChange={handleChange}
            style={styles.input}
            required
          />
          
          <label>ID</label>
          <input
            type="ID"
            name="ID"
            placeholder="Ingrese su ID"
            value={formData.ID}
            onChange={handleChange}
            style={styles.input}
            required
           />

          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Ingrese su contraseña"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label>Confirmar Contraseña</label>
          <input
            type="password"
            name="confirmarPassword"
            placeholder="Confirme su contraseña"
            value={formData.confirmarPassword}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label>Rol</label>
          <select
            name="rol"
            value={formData.rol}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="estudiante">Estudiante</option>
            <option value="administrador">Administrador</option>
          </select>

          <button type="submit" style={styles.button}>
            Crear Cuenta
          </button>
        </form>

        <Link to="/" style={styles.link}>
          Volver al inicio de sesión
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#f4f4f4",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: "400px",
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "15px",
    border: "2px solid #2e1a87"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "20px",
    border: "1px solid #ccc"
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "#2e1a87",
    color: "white",
    cursor: "pointer"
  },
  link: {
    display: "block",
    marginTop: "15px",
    textAlign: "center",
    textDecoration: "none"
  }
};

export default CrearCuenta;