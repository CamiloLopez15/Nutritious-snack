import logo from "./../assets/Logo-health-food.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex w-full h-24 shadow-md bg-green-600 rounded-b-md justify-between">
      <figure className="max-w-max h-24 flex justify-center items-center">
        <Link to="/">
          <img
            src={logo}
            alt="Health Food"
            className="w-auto h-24 rounded-br-full rounded-tr-full"
          />
        </Link>
      </figure>
      <ul className="hidden lg:flex w-full h-full items-center justify-evenly text-lg font-menu text-neutral-200 ">
        <li className="nav-li">
          <Link to="/lunes">Lunes</Link>
        </li>
        <li className="nav-li">
          <Link to="/martes">Martes</Link>
        </li>
        <li className="nav-li">
          <Link to="/miercoles">Miércoles</Link>
        </li>
        <li className="nav-li">
          <Link to="/jueves">Jueves</Link>
        </li>
        <li className="nav-li">
          <Link to="/viernes">Viernes</Link>
        </li>
        <li className="nav-li">
          <Link to="/sabado">Sábado</Link>
        </li>
        <li className="nav-li">
          <Link to="/domingo">Domingo</Link>
        </li>
      </ul>
      <button onClick={()=> setMenuOpen(!isMenuOpen)} className="flex lg:hidden h-full justify-center items-center p-5">
      {isMenuOpen ? (
            // Icono X para cerrar el menú
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            // Icono de tres líneas para abrir el menú
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
      </button>
      <ul className={`${isMenuOpen ? 'top-24': '-top-96 ' }  flex lg:hidden flex-col absolute transition-all duration-150 z-20 bg-slate-100 w-full justify-center items-center gap-2 p-5 rounded-b-lg shadow-lg`}>
        <li className="nav-li">
          <Link to="/lunes">Lunes</Link>
        </li>
        <li className="nav-li">
          <Link to="/martes">Martes</Link>
        </li>
        <li className="nav-li">
          <Link to="/miercoles">Miércoles</Link>
        </li>
        <li className="nav-li">
          <Link to="/jueves">Jueves</Link>
        </li>
        <li className="nav-li">
          <Link to="/viernes">Viernes</Link>
        </li>
        <li className="nav-li">
          <Link to="/sabado">Sábado</Link>
        </li>
        <li className="nav-li">
          <Link to="/domingo">Domingo</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
