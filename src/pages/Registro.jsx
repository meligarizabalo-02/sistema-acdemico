import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Registro() {

  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const registrar = async () => {

    const res = await fetch("http://localhost:3001/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user, password })
    });

    const data = await res.json();
    alert(data.mensaje);

    if (data.success) {
      navigate("/"); //vuelve al login
    }
  };

  return (
    <div style={{
      backgroundColor: "#f5eaea",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "40px"
    }}>

      {/* Logo y título */}
      <div style={{
        textAlign: "center",
        marginBottom: "30px"
      }}>
        <h3 style={{ color: "#2e2e8f" }}>
          Institucion Educativa Distrital San Jose
        </h3>

        <img
          src={logo}
          alt="Logo"
          style={{ marginTop: "10px", width: "150px" }}
        />
      </div>

      {/* Caja */}
      <div style={{
        width: "400px",
        border: "1px solid #6c63ff",
        padding: "30px",
        backgroundColor: "white",
        borderRadius: "10px"
      }}>

        <h3 style={{ fontStyle: "italic" }}>Crear Cuenta</h3>

        <p style={{ fontSize: "14px", color: "gray" }}>
          Regístrate para acceder al sistema académico
        </p>

        {/* Usuario */}
        <label>Usuario</label>
        <input
          type="text"
          placeholder="Ingrese un usuario"
          value={user}
          onChange={e => setUser(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            marginBottom: "15px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: "#131212",
            color: "white"
          }}
        />

        {/* Contraseña */}
        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Ingrese una contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            marginBottom: "20px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: "#0a0a0a",
            color: "white"
          }}
        />

        {/* Botón */}
        <button
          onClick={registrar}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#0c005b",
            color: "white",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer"
          }}
        >
          Registrar
        </button>

        {/* Volver */}
        <div
          onClick={() => navigate("/")}
          style={{
            textAlign: "center",
            marginTop: "20px",
            cursor: "pointer",
            color: "#2e2e8f"
          }}
        >
          Volver al inicio de sesión
        </div>

      </div>
    </div>
  );
}

export default Registro;