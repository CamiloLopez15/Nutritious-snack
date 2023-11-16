import Footer from "../Components/Footer";
import Tabla from "../Components/Tabla";
import banner from "./../assets/banner-sabado.jpg";

const data = [
  {
    category: "Pan (1 rebanada)",
    name: "Tostadas integrales",
    calories: 69,
    carbs: 12,
    fiber: 2,
    fat: 1,
    protein: 2,
  },
  {
    category: "Productos para untar (1 cucharada)",
    name: "Mermelada de pera",
    calories: 49,
    carbs: 12,
    fiber: 0.6,
    fat: 0.1,
    protein: 0.2,
  },
  {
    category: "Frutas (1 kiwi)",
    name: "Kiwi",
    calories: 61,
    carbs: 15,
    fiber: 2.1,
    fat: 0.5,
    protein: 1.2,
  },
  {
    category: "Lácteos (1 vaso - 240 ml)",
    name: "Vaso de leche",
    calories: 150,
    carbs: 12,
    protein: 8,
    fat: 8,
    fiber: 0,
  },
  {
    category: "Bebidas (1 taza)",
    name: "Té sin azúcar",
    calories: 2,
    carbs: 0,
    fat: 0,
    protein: 0,
    fiber: 0,
  },
];

function Sabado() {
  return (
    <>
      <main className="flex flex-col w-full h-full actualizacionEstado">
        <figure className="flex w-full h-44">
          <img src={banner} alt="banner" className="object-cover w-full" />
        </figure>
        <section className="flex flex-col lg:flex-row w-full h-full items-center">
          <article className="flex flex-col w-[100%] lg:w-[50%] h-full">
            <header className="p-8">
              <h1 className="text-3xl font-bold text-green-600">Sábado</h1>
            </header>
            <div className="py-3 px-8 font-comun">
              <p className="w-[100%]">
                Tostadas integrales con mermelada de pera y rodajas de kiwi.
                Acompañar con un vaso de leche o té sin azúcar.
              </p>
              <br />
              <p className="font-bold">Ingredientes: </p>
              <ul className="list-disc px-10 py-2">
                <li className="underline decoration-green-500 decoration-2">
                  Tostadas integrales.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Mermelada de pera.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Kiwi.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Vaso de leche o de té sin azucar.
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

export default Sabado;
