import Footer from "../Components/Footer";
import Tabla from "../Components/Tabla";
import banner from "./../assets/banner-miercoles.jpg";

const data = [
  {
    category: "Repostería (1 panqueque)",
    name: "Panqueques integrales",
    calories: 87,
    carbs: 17,
    fiber: 1.5,
    fat: 1.5,
    protein: 2
  },
  {
    category: "Productos para untar (1 cucharada)",
    name: "Mermelada de frambuesa",
    calories: 50,
    carbs: 13,
    fiber: 0.5,
    fat: 0,
    protein: 0
  },
  {
    category: "Lácteos (1 taza)",
    name: "Yogur natural",
    calories: 150,
    carbs: 17,
    fiber: 0,
    fat: 8,
    protein: 5
  },
  {
    category: "Frutos secos (30gr)",
    name: "Frutos secos",
    calories: 185,
    carbs: 4,
    fiber: 2,
    fat: 18,
    protein: 4
  }
];


function Miercoles() {
  return (
    <>
      <main className="flex flex-col w-full h-full actualizacionEstado">
        <figure className="flex w-full h-44">
          <img src={banner} alt="banner" className="object-cover w-full" />
        </figure>
        <section className="flex flex-col lg:flex-row w-full h-full items-center">
          <article className="flex flex-col w-[100%] lg:w-[50%] h-full">
            <header className="p-8">
              <h1 className="text-3xl font-bold text-green-600">Miércoles</h1>
            </header>
            <div className="py-3 px-8 font-comun">
              <p className="w-[100%]">
                Panqueques integrales con mermelada de frambuesa. Acompañar con
                yogur natural y una porción pequeña de frutos secos.
              </p>
              <br />
              <p className="font-bold">Ingredientes: </p>
              <ul className="list-disc px-10 py-2">
                <li className="underline decoration-green-500 decoration-2">
                  Panqueques integrales.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Mermelada de frambuesa.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Yogur natural.
                </li>
                <li className="underline decoration-green-500 decoration-2">
                  Frutos secos.
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

export default Miercoles;
