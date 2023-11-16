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
          <Route path="/Healthy-food/" element={<Inicio />} />
          <Route
            path="/Healthy-food/lunes"
            element={<Lunes />}
          />
          <Route
            path="/Healthy-food/martes"
            element={<Martes />}
          />
          <Route
            path="/Healthy-food/miercoles"
            element={<Miercoles />}
          />
          <Route
            path="/Healthy-food/jueves"
            element={<Jueves />}
          />
          <Route
            path="/Healthy-food/viernes"
            element={<Viernes />}
          />
          <Route
            path="/Healthy-food/sabado"
            element={<Sabado />}
          />
          <Route
            path="/Healthy-food/domingo"
            element={<Domingo />}
          />
        </Routes>
        {/* <Footer></Footer> */}
    </>
  )
}

export default App
