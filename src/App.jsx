import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RecuperarPassword from "./pages/RecuperarPassword";
import CrearCuenta from "./pages/CrearCuenta";
import Menu from "./pages/Menu";
import AdminAccess from "./pages/AdminAccess";
import Registro from "./pages/Registro";
import Estudiantes from "./pages/Estudiantes";
import Calificaciones from "./pages/Calificaciones";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/recuperar" element={<RecuperarPassword />} />
      <Route path="/crear-cuenta" element={<CrearCuenta />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/admin" element={<AdminAccess />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/estudiantes" element={<Estudiantes />} />
      <Route path="/calificaciones" element={<Calificaciones />} />
    </Routes>
  );
}

export default App;