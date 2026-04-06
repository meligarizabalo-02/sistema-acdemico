import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Estudiantes() {

  const navigate = useNavigate();

  const [estudiantes, setEstudiantes] = useState([
    { id: 1, nombre: "Juan Pérez", curso: "10A" },
    { id: 2, nombre: "María Gómez", curso: "9B" }
  ]);

  const [nuevo, setNuevo] = useState({
    nombre: "",
    curso: ""
  });

  const agregarEstudiante = () => {
    if (!nuevo.nombre || !nuevo.curso) {
      alert("Completa todos los campos");
      return;
    }

    setEstudiantes([
      ...estudiantes,
      { ...nuevo, id: Date.now() }
    ]);

    setNuevo({ nombre: "", curso: "" });
  };

  const eliminar = (id) => {
    setEstudiantes(estudiantes.filter(e => e.id !== id));
  };

  return (
    <div style={{
      backgroundColor: "#ecdddd",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "40px"
    }}>

      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h3 style={{ color: "#2e2e8f" }}>
          Institución Educativa Distrital San José
        </h3>

        <img
          src={logo}
          alt="Logo"
          style={{ width: "120px", marginTop: "10px" }}
        />
      </div>

      {/* CONTENEDOR */}
      <div style={{
        width: "500px",
        maxWidth: "90%",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        border: "1px solid #6c63ff"
      }}>

        <h2 style={{ marginBottom: "20px", color: "#7a7676" }}>
          Gestión de Estudiantes
        </h2>

        {/* FORMULARIO */}
        <div style={{ marginBottom: "20px" }}>
          <input
            placeholder="Nombre"
            value={nuevo.nombre}
            onChange={(e) => setNuevo({ ...nuevo, nombre: e.target.value })}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
              borderRadius: "20px",
              border: "none",
              backgroundColor: "#131212",
              color: "white"
            }}
          />

          <input
            placeholder="Curso"
            value={nuevo.curso}
            onChange={(e) => setNuevo({ ...nuevo, curso: e.target.value })}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
              borderRadius: "20px",
              border: "none",
              backgroundColor: "#131212",
              color: "white"
            }}
          />

          <button
            onClick={agregarEstudiante}
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
            Agregar Estudiante
          </button>
        </div>

        {/* LISTA */}
        <div>
          {estudiantes.map(e => (
            <div
              key={e.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f1f1f1",
                padding: "10px",
                borderRadius: "10px",
                marginBottom: "10px",
                color: "black"
              }}
            >
              <span>
                {e.nombre} - {e.curso}
              </span>

              <button
                onClick={() => eliminar(e.id)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  borderRadius: "10px",
                  cursor: "pointer"
                }}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>

        {/* BOTÓN VOLVER */}
        <button
          onClick={() => navigate("/menu")}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#2e2e8f",
            color: "white",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer"
          }}
        >
          Volver al menú
        </button>

      </div>
    </div>
  );
}

export default Estudiantes;