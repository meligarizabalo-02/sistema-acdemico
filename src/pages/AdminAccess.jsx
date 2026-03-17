import { useNavigate } from "react-router-dom";

function AdminAccess() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí luego irá la validación real
    navigate("/menu");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f3f4f6" }}>
      
      {/* 🟣 1️⃣ SIDEBAR */}
      <aside
        style={{
          width: "250px",
          backgroundColor: "#1e3a8a",
          color: "white",
          padding: "30px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}
      >
        <h3 style={{ marginBottom: "20px" }}>Barra de Tareas</h3>

        {[
          "Consultar Boletín",
          "Calificaciones",
          "Horario estudiantil",
          "Horario e información de docentes",
          "Materias",
          "Anuncios"
        ].map((item, index) => (
          <button
            key={index}
            style={{
              padding: "10px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "white",
              color: "#1e3a8a",
              fontWeight: "bold"
            }}
          >
            {item}
          </button>
        ))}
      </aside>

      {/* 🔵 2️⃣ MAIN CONTENT */}
      <main
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/* 🟡 3️⃣ FORM CARD */}
        <div
          style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "12px",
            width: "400px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}
        >
          
          {/* 🔹 Icono */}
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#1e3a8a",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto 20px auto",
              fontSize: "24px"
            }}
          >
            👤
          </div>

          {/* 🔹 Título */}
          <h2>Acceso Administrativo</h2>

          {/* 🔹 Descripción */}
          <p style={{ fontSize: "14px", color: "#555", marginBottom: "20px" }}>
            Inicie sesión para realizar modificaciones como usuario administrativo
          </p>

          {/* 🔹 Formulario */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            
            <div style={{ textAlign: "left" }}>
              <label>Usuario</label>
              <input
                type="text"
                placeholder="Ingrese su usuario"
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                  borderRadius: "6px",
                  border: "1px solid #ccc"
                }}
                required
              />
            </div>

            <div style={{ textAlign: "left" }}>
              <label>Contraseña</label>
              <input
                type="password"
                placeholder="Ingrese su contraseña"
                style={{
                  width: "100%",
                  padding: "8px",
                  marginTop: "5px",
                  borderRadius: "6px",
                  border: "1px solid #ccc"
                }}
                required
              />
            </div>

            <button
              type="submit"
              style={{
                marginTop: "10px",
                padding: "10px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#111827",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer"
              }}
            >
              Iniciar sesión
            </button>

          </form>
        </div>
      </main>
    </div>
  );
}

export default AdminAccess;