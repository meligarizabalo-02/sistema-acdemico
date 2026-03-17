import { useState } from "react";
import { Link } from "react-router-dom";

function RecuperarPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Se enviaron instrucciones a: ${email}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Recuperar Contraseña</h2>
        <p style={styles.subtitle}>
          Ingresa tu email para recibir instrucciones de recuperación
        </p>

        <form onSubmit={handleSubmit}>
          <p style={styles.description}>
            Ingresa tu correo electrónico y te enviaremos un enlace para que
            puedas restablecer tu contraseña
          </p>

          <label style={styles.label}>Correo Electrónico</label>
          <input
            type="email"
            placeholder="Ingrese su correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Enviar Instrucciones
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
    backgroundColor: "#f2f2f2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "500px",
    padding: "40px",
    backgroundColor: "white",
    borderRadius: "20px",
    border: "2px solid #2e1a87",
    textAlign: "center",
  },
  title: {
    marginBottom: "10px",
  },
  subtitle: {
    marginBottom: "20px",
    color: "#666",
  },
  description: {
    marginBottom: "20px",
    fontSize: "14px",
  },
  label: {
    display: "block",
    textAlign: "left",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    marginBottom: "20px",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "#2e1a87",
    color: "white",
    cursor: "pointer",
  },
  link: {
    display: "block",
    marginTop: "20px",
    color: "#000",
    textDecoration: "none",
  },
};

export default RecuperarPassword;