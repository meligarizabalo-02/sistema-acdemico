import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Calificaciones() {

  const navigate = useNavigate();

  const [notas, setNotas] = useState([
    { id: 1, estudiante: "Juan Pérez", materia: "Matemáticas", nota: 4.5 },
    { id: 2, estudiante: "María Gómez", materia: "Español", nota: 3.8 }
  ]);

  const [nueva, setNueva] = useState({
    estudiante: "",
    materia: "",
    nota: ""
  });

  const agregarNota = () => {
    if (!nueva.estudiante || !nueva.materia || !nueva.nota) {
      alert("Completa todos los campos");
      return;
    }

    setNotas([
      ...notas,
      { ...nueva, id: Date.now() }
    ]);

    setNueva({
      estudiante: "",
      materia: "",
      nota: ""
    });
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
        width: "600px",
        maxWidth: "95%",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        border: "1px solid #6c63ff"
      }}>

        <h2 style={{ marginBottom: "20px", color: "#494747"  }}>
          Gestión de Calificaciones
        </h2>

        {/* FORMULARIO */}
        <div style={{ marginBottom: "20px" }}>
          <input
            placeholder="Estudiante"
            value={nueva.estudiante}
            onChange={(e) => setNueva({ ...nueva, estudiante: e.target.value })}
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
            placeholder="Materia"
            value={nueva.materia}
            onChange={(e) => setNueva({ ...nueva, materia: e.target.value })}
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
            placeholder="Nota"
            value={nueva.nota}
            onChange={(e) => setNueva({ ...nueva, nota: e.target.value })}
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
            onClick={agregarNota}
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
            Agregar Nota
          </button>
        </div>

        {/* TABLA */}
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px"
        }}>
          <thead>
            <tr style={{ backgroundColor: "#2e2e8f", color: "white" }}>
              <th style={{ padding: "10px" }}>Estudiante</th>
              <th style={{ padding: "10px" }}>Materia</th>
              <th style={{ padding: "10px" }}>Nota</th>
            </tr>
          </thead>

          <tbody>
            {notas.map(n => (
              <tr key={n.id} style={{ textAlign: "center" }}>
                <td style={{ padding: "10px", borderBottom: "1px solid #0a0a0a", color: "black"}}>
                  {n.estudiante}
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #080808", color: "black" }}>
                  {n.materia}
                </td>
                <td style={{ padding: "10px", borderBottom: "1px solid #0a0a0a", color: "black" }}>
                  {n.nota}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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

export default Calificaciones;