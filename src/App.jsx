import { Route, Routes } from "react-router-dom";
import Lunes from "./Pages/Lunes";
import Martes from "./Pages/Martes";
import Miercoles from "./Pages/Miercoles";
import Jueves from "./Pages/Jueves";
import Viernes from "./Pages/Viernes";
import Sabado from "./Pages/Sabado";
import Domingo from "./Pages/Domingo";
import Inicio from "./Pages/Inicio";
//Components
import Navbar from "./Components/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Inicio />} />
          <Route
            path="/lunes"
            element={<Lunes />}
          />
          <Route
            path="/martes"
            element={<Martes />}
          />
          <Route
            path="/miercoles"
            element={<Miercoles />}
          />
          <Route
            path="/jueves"
            element={<Jueves />}
          />
          <Route
            path="/viernes"
            element={<Viernes />}
          />
          <Route
            path="/sabado"
            element={<Sabado />}
          />
          <Route
            path="/domingo"
            element={<Domingo />}
          />
        </Routes>
        {/* <Footer></Footer> */}
    </>
  )
}

export default App
