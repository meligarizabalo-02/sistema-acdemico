import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Menu() {
  const navigate = useNavigate();

  const userName = "Melina"; // luego esto será dinámico

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f4f4f4" }}>
      
      {/* 🔵 1️⃣ HEADER */}
      <header
        style={{
          backgroundColor: "#1e3a8a",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 30px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src={logo} alt="Logo" width="40" />
          <h3>Sistema Académico</h3>
        </div>

        <div>
          <span style={{ marginRight: "20px" }}>
            Bienvenida, {userName} 👋
          </span>
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "6px 12px",
              backgroundColor: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Cerrar sesión
          </button>
        </div>
      </header>

      {/* 🟢 2️⃣ CONTENEDOR PRINCIPAL */}
      <div style={{ padding: "40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Menú de navegación
        </h2>

        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}
        >
          
          {/* 🟡 3️⃣ GRID DE OPCIONES */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px"
            }}
          >
            <MenuButton icon="📄" text="Boletín" />
            <MenuButton icon="📚" text="Materias" />
            <MenuButton icon="📝" text="Calificaciones" />
            <MenuButton icon="⏰" text="Horario" />
            <MenuButton icon="📢" text="Anuncios" />
            <MenuButton icon="👩‍🏫" text="Profesores" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuButton({ icon, text }) {
  return (
    <button
      style={{
        padding: "20px",
        fontSize: "16px",
        borderRadius: "8px",
        border: "1px solid #ddd",
        cursor: "pointer",
        backgroundColor: "#f9fafb"
      }}
    >
      <div style={{ fontSize: "30px" }}>{icon}</div>
      <div style={{ marginTop: "10px" }}>{text}</div>
    </button>
  );
}

export default Menu;