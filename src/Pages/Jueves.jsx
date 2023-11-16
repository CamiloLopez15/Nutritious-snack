import Footer from "../Components/Footer";
import Tabla from "../Components/Tabla";
import banner from "./../assets/banner-jueves.jpg";

const data = [
  {
    category: "Pan (1 tortilla)",
    name: "Tortilla integral",
    calories: 70,
    carbs: 12,
    fiber: 2,
    fat: 2,
    protein: 2,
  },
  {
    category: "Productos para untar (1 cucharada)",
    name: "Mermelada de ciruela",
    calories: 50,
    carbs: 13,
    fiber: 0.5,
    fat: 0,
    protein: 0,
  },
  {
    category: "Frutas (1 manzana)",
    name: "Manzana",
    calories: 52,
    carbs: 14,
    fiber: 2.4,
    fat: 0.2,
    protein: 0.3,
  },
  {
    category: "Aperitivos (5 palitos)",
    name: "Palitos de queso",
    calories: 100,
    carbs: 1,
    fiber: 0,
    fat: 8,
    protein: 6,
  },
  {
    category: "Frutas (1 taza)",
    name: "Uvas",
    calories: 104,
    carbs: 27,
    fiber: 1.4,
    fat: 0.2,
    protein: 1,
  },
];

function Jueves() {
  return (
    <>
      <main className="flex flex-col w-full h-full actualizacionEstado">
        <figure className="flex w-full h-44">
          <img src={banner} alt="banner" className="object-cover w-full" />
        </figure>
        <section className="flex flex-col lg:flex-row w-full h-full items-center">
          <article className="flex flex-col w-[100%] lg:w-[50%] h-full">
            <header className="p-8">
              <h1 className="text-3xl font-bold text-green-600">Jueves</h1>
            </header>
            <div className="py-3 px-8 font-comun">
              <p className="w-[100%]">
                Rollitos de tortilla integral con mermelada de ciruela y trozos
                de manzana. Acompañar con palitos de queso y uvas.
              </p>
              <br />
              <p className="font-bold">Ingredientes: </p>
              <ul className="list-disc px-10 py-2">
                <li className="underline decoration-green-500 decoration-2">
                  Tortilla integral.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Mermelada de ciruela.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Manzana.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Palitos de queso.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Uvas.
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

export default Jueves;
