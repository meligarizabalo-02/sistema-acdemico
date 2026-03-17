import { useState } from "react";
import logo from "../assets/logo.jpg";
function Login() {

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        usuario: correo,
        password: password
      })
    });

    const data = await response.json();

    if (data.success) {
      alert("Autenticación satisfactoria");
    } else {
      alert("Error en la autenticación");
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
       alt="Logo Institución"
       style={{ marginTop: "10px", width: "150px" }}
       />
       </div>
      
      {/* Caja login */}
      <div style={{
        width: "400px",
        border: "1px solid #6c63ff",
        padding: "30px",
        backgroundColor: "white"
      }}>

        <h3 style={{ fontStyle: "italic" }}>Iniciar Sesion</h3>
        <p style={{ fontSize: "14px", color: "gray" }}>
          Ingresa tus credenciales para acceder a tu cuenta
        </p>

        {/* Correo */}
        <label>Correo Electronico</label>
        <input
          type="email"
          placeholder="Ingrese su usuario"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
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
          placeholder="Ingrese su contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "5px",
            marginBottom: "10px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: "#0a0a0a",
            color: "white"
  }}
  />
        
        <div style={{
          textAlign: "right",
          fontSize: "13px",
          marginBottom: "20px",
          cursor: "pointer"
        }}>
          ¿Olvidaste tu contraseña?
        </div>

        <button 
        onClick={handleLogin}
        style={{
        width: "100%",
        padding: "10px",
        backgroundColor: "#0c005b",
        color: "white",
        border: "none",
        borderRadius: "20px",
        cursor: "pointer"
        }}>
           Iniciar sesión
         </button>


        <div style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "14px"
        }}>
          ¿No tienes una cuenta?
          <div style={{ marginTop: "5px", color: "#2e2e8f", cursor: "pointer" }}>
            Crear una cuenta
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
