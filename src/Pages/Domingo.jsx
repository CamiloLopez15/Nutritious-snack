import Footer from "../Components/Footer";
import Tabla from "../Components/Tabla";
import banner from "./../assets/banner-domingo.jpg";

const data = [
  {
    category: "Repostería (1 muffin)",
    name: "Muffins integrales",
    calories: 120,
    carbs: 22,
    fiber: 2,
    fat: 3,
    protein: 3,
  },
  {
    category: "Productos para untar (1 cucharada)",
    name: "Mermelada",
    calories: 50,
    carbs: 13,
    fiber: 0.5,
    fat: 0,
    protein: 0,
  },
  {
    category: "Frutas (1 taza)",
    name: "Piña",
    calories: 83,
    carbs: 22,
    fiber: 2,
    fat: 1,
    protein: 1,
  },
  {
    category: "Frutas (1 banana)",
    name: "Banano",
    calories: 105,
    carbs: 27,
    fiber: 3.1,
    fat: 0.4,
    protein: 1.3,
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
    category: "Bebidas (1 vaso - 240 ml)",
    name: "Vaso de agua",
    calories: 0,
    carbs: 0,
    fat: 0,
    protein: 0,
    fiber: 0,
  },
];

function Domingo() {
  return (
    <>
      <main className="flex flex-col w-full h-full actualizacionEstado">
        <figure className="flex w-full h-44">
          <img src={banner} alt="banner" className="object-cover w-full" />
        </figure>
        <section className="flex flex-col lg:flex-row w-full h-full items-center">
          <article className="flex flex-col w-[100%] lg:w-[50%] h-full">
            <header className="p-8">
              <h1 className="text-3xl font-bold text-green-600">Domingo</h1>
            </header>
            <div className="py-3 px-8 font-comun">
              <p className="w-[100%]">
                Muffins integrales con mermelada de fruta al gusto. Acompañar
                con una porción de fruta fresca mixta y un vaso de agua.
              </p>
              <br />
              <p className="font-bold">Ingredientes: </p>
              <ul className="list-disc px-10 py-2">
                <li className="underline decoration-green-500 decoration-2">
                  Muffins integrales.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Mermelada.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Piña.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Banano.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Manzana.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Vaso de agua.
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

export default Domingo;
