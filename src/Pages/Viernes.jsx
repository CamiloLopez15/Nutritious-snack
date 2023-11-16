import Footer from "../Components/Footer";
import Tabla from "../Components/Tabla";
import banner from "./../assets/banner-viernes.jpg";

const data = [
  {
    category: "Repostería (1 crepe)",
    name: "Crepes integrales",
    calories: 98,
    carbs: 16,
    fiber: 1,
    fat: 3,
    protein: 3,
  },
  {
    category: "Productos para untar (1 cucharada)",
    name: "Mermelada de mora",
    calories: 50,
    carbs: 13,
    fiber: 1,
    fat: 0,
    protein: 0,
  },
  {
    category: "Productos para untar (1 cucharada)",
    name: "Crema de maní",
    calories: 94,
    carbs: 3,
    fiber: 1,
    fat: 8,
    protein: 4,
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
    category: "Frutas (1 taza)",
    name: "Sandía",
    calories: 46,
    carbs: 12,
    fiber: 0.6,
    fat: 0.2,
    protein: 0.9,
  },
  {
    category: "Frutas (1 mango)",
    name: "Mango",
    calories: 201,
    carbs: 50,
    fiber: 5,
    fat: 1,
    protein: 2,
  },
];

function Viernes() {
  return (
    <>
      <main className="flex flex-col w-full h-full actualizacionEstado">
        <figure className="flex w-full h-44">
          <img src={banner} alt="banner" className="object-cover w-full" />
        </figure>
        <section className="flex flex-col lg:flex-row w-full h-full items-center">
          <article className="flex flex-col w-[100%] lg:w-[50%] h-full">
            <header className="p-8">
              <h1 className="text-3xl font-bold text-green-600">Viernes</h1>
            </header>
            <div className="py-3 px-8 font-comun">
              <p className="w-[100%]">
                Crepes integrales con mermelada de mora y un poco de crema de
                maní. Acompañar con un batido de frutas variadas.
              </p>
              <br />
              <p className="font-bold">Ingredientes: </p>
              <ul className="list-disc px-10 py-2">
                <li className="underline decoration-green-500 decoration-2">
                  Crepes integrales.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Mermelada de mora.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Crema de maní.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Piña.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Sandia.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Mango.
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

export default Viernes;
