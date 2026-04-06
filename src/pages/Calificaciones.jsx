import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Calificaciones() {

  const navigate = useNavigate();

  // BASE DE DATOS SIMULADA
  const [data, setData] = useState([
    {
      estudiante: "Juan Pérez",
      notas: [
        { materia: "Matemáticas", nota: 4.5 },
        { materia: "Español", nota: 3.8 }
      ]
    },
    {
      estudiante: "María Gómez",
      notas: [
        { materia: "Inglés", nota: 4.2 },
        { materia: "Ciencias", nota: 3.9 }
      ]
    }
  ]);

  const [busqueda, setBusqueda] = useState("");
  const [seleccionado, setSeleccionado] = useState(null);

  const [nueva, setNueva] = useState({
    materia: "",
    nota: ""
  });

  //BUSCAR ESTUDIANTE
  const buscar = () => {
    const encontrado = data.find(e =>
      e.estudiante.toLowerCase().includes(busqueda.toLowerCase())
    );

    if (encontrado) {
      setSeleccionado(encontrado);
    } else {
      alert("Estudiante no encontrado");
      setSeleccionado(null);
    }
  };

  //AGREGAR NOTA
  const agregarNota = () => {
    if (!nueva.materia || !nueva.nota) {
      alert("Completa todos los campos");
      return;
    }

    const actualizado = data.map(e => {
      if (e.estudiante === seleccionado.estudiante) {
        return {
          ...e,
          notas: [...e.notas, nueva]
        };
      }
      return e;
    });

    setData(actualizado);
    setNueva({ materia: "", nota: "" });
    buscar();
  };

  // ELIMINAR NOTA
  const eliminarNota = (index) => {
    const actualizado = data.map(e => {
      if (e.estudiante === seleccionado.estudiante) {
        return {
          ...e,
          notas: e.notas.filter((_, i) => i !== index)
        };
      }
      return e;
    });

    setData(actualizado);
    buscar();
  };

  // EDITAR NOTA
  const editarNota = (index) => {
    const nuevaNota = prompt("Nueva nota:");

    if (!nuevaNota) return;

    const actualizado = data.map(e => {
      if (e.estudiante === seleccionado.estudiante) {
        const nuevasNotas = [...e.notas];
        nuevasNotas[index].nota = nuevaNota;

        return {
          ...e,
          notas: nuevasNotas
        };
      }
      return e;
    });

    setData(actualizado);
    buscar();
  };

  return (
    <div style={{
      backgroundColor: "#eee3e3",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "40px"
    }}>

      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h3 style={{ color: "#2e2e8f" }}>
          Sistema Académico
        </h3>

        <img src={logo} alt="Logo" style={{ width: "120px" }} />
      </div>

      {/* CONTENEDOR */}
      <div style={{
        width: "600px",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "10px",
        border: "1px solid #6c63ff"
      }}>

        <h2 style={{ color: "black" }}> 
          Calificaciones 
        </h2>

        {/* BUSCADOR */}
        <input
          placeholder="Buscar estudiante..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: "#131212",
            color: "white"
          }}
        />

        <button onClick={buscar} style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#0c005b",
          color: "white",
          border: "none",
          borderRadius: "20px"
        }}>
          Buscar
        </button>

        {/* RESULTADOS */}
        {seleccionado && (
          <>
            <h3 style={{ marginTop: "20px" }}>
              {seleccionado.estudiante}
            </h3>

            {/* TABLA */}
            {seleccionado.notas.map((n, i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f1f1f1",
                padding: "10px",
                borderRadius: "10px",
                marginTop: "10px"
              }}>
                <span>{n.materia} - {n.nota}</span>

                <div>
                  <button onClick={() => editarNota(i)}>✏️</button>
                  <button onClick={() => eliminarNota(i)}>🗑️</button>
                </div>
              </div>
            ))}

            {/* AGREGAR */}
            <div style={{ marginTop: "20px" }}>
              <input
                placeholder="Materia"
                value={nueva.materia}
                onChange={(e) => setNueva({ ...nueva, materia: e.target.value })}
              />

              <input
                placeholder="Nota"
                value={nueva.nota}
                onChange={(e) => setNueva({ ...nueva, nota: e.target.value })}
              />

              <button onClick={agregarNota}>
                Agregar Nota
              </button>
            </div>
          </>
        )}

        {/* VOLVER */}
        <button
          onClick={() => navigate("/menu")}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#2e2e8f",
            color: "white",
            border: "none",
            borderRadius: "20px"
          }}
        >
          Volver al menú
        </button>

      </div>
    </div>
  );
}

export default Calificaciones;