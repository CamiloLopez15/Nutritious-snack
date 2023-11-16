/* eslint-disable react/prop-types */
function Participante({ img, nombre, cargo }) {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg shadow-2xl bg-neutral-100 w-56 p-3 hover:scale-105 transition-all duration-200">
      <img
        className="w-52 rounded-lg"
        src={img}
      />
      <div className="flex flex-col justify-center items-center font-comun p-3 pb-0">
        <h3 className="text-xl underline decoration-green-500 decoration-2">{nombre}</h3>
        <h4 className="text-green-500">{cargo}</h4>
      </div>
    </div>
  );
}

export default Participante;
