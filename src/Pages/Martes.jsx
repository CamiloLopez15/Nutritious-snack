import Footer from "../Components/Footer";
import Tabla from "../Components/Tabla";
import banner from "./../assets/banner-martes.jpg";

const data = [
  {
    category: "Pan (1 rebanada)",
    name: "Panes tajados integrales",
    calories: 69,
    carbs: 12,
    fiber: 2,
    fat: 1,
    protein: 2
  },
  {
    category: "Embutidos (30gr)",
    name: "Jamón",
    calories: 30,
    carbs: 0,
    fiber: 0,
    fat: 2,
    protein: 3
  },
  {
    category: "Lácteos (30gr)",
    name: "Queso bajo en grasa",
    calories: 50,
    carbs: 1,
    fiber: 0,
    fat: 2,
    protein: 7
  },
  {
    category: "Vegetales (1 hoja)",
    name: "Lechuga",
    calories: 5,
    carbs: 1,
    fiber: 0.5,
    fat: 0,
    protein: 0.5
  },
  {
    category: "Productos para untar (1 cucharada)",
    name: "Mermelada de arándanos",
    calories: 50,
    carbs: 13,
    fiber: 0.5,
    fat: 0,
    protein: 0
  },
  {
    category: "Vegetales (1 unidad)",
    name: "Zanahoria",
    calories: 30,
    carbs: 7,
    fiber: 2,
    fat: 0,
    protein: 1
  },
  {
    category: "Aperitivos (30gr)",
    name: "Crema de garbanzos",
    calories: 50,
    carbs: 8,
    fiber: 2,
    fat: 2,
    protein: 2
  }
];



function Martes() {
  return (
    <>
      <main className="flex flex-col w-full h-full actualizacionEstado">
        <figure className="flex w-full h-44">
          <img src={banner} alt="banner" className="object-cover w-full" />
        </figure>
        <section className="flex flex-col lg:flex-row w-full h-full items-center">
          <article className="flex flex-col w-[100%] lg:w-[50%] h-full">
            <header className="p-8">
              <h1 className="text-3xl font-bold text-green-600">Martes</h1>
            </header>
            <div className="py-3 px-8 font-comun">
              <p className="w-[100%]">
                Mini sándwiches integrales con mermelada de arándanos y queso
                bajo en grasa. Acompañar con palitos de zanahoria y crema de
                garbanzos.
              </p>
              <br />
              <p className="font-bold">Ingredientes: </p>
              <ul className="list-disc px-10 py-2">
                <li className="underline decoration-green-500 decoration-2">
                  Pan tajado integral.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Jamón.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Queso bajo en grasa.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Lechuga.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Mermelada de arándanos.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Zanahoria.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Crema de garbanzos.
                </li>
              </ul>
            </div>
          </article>
          <aside className="block lg:flex justify-start lg:justify-center items-center lg:w-auto h-[100%] w-full  pb-3 overflow-x-scroll">
            <Tabla data={data} />
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Martes;
