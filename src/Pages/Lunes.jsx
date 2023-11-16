import Footer from "../Components/Footer";
import Tabla from "../Components/Tabla";
import banner from "./../assets/banner-lunes.jpg";

const data = [
  {
    category: "Pan (1 rebanada)",
    name: "Tostadas integrales",
    calories: 69,
    carbs: 12,
    fiber: 2,
    fat: 1,
    protein: 2
  },
  {
    category: "Productos para untar (1 cucharada)",
    name: "Mermelada de fresa",
    calories: 50,
    carbs: 13,
    fiber: 0.5,
    fat: 0,
    protein: 0
  },
  {
    category: "Frutas (1 unidad)",
    name: "Plátano",
    calories: 105,
    carbs: 27,
    fiber: 3.1,
    fat: 0.4,
    protein: 1.3
  },
  {
    category: "Lácteos (1 vaso - 240 ml)",
    name: "Vaso de leche",
    calories: 150,
    carbs: 12,
    protein: 8,
    fat: 8,
    fiber: 0
  },
  {
    category: "Bebidas (1 vaso - 240 ml)",
    name: "Jugo de mora",
    calories: 120,
    carbs: 29,
    fiber: 0.5,
    fat: 0.5,
    protein: 1
  }
];


function Lunes() {
  return (
    <>
      <main className="flex flex-col w-full h-full actualizacionEstado">
        <figure className="flex w-full h-44">
          <img src={banner} alt="banner" className="object-cover w-full" />
        </figure>
        <section className="flex flex-col lg:flex-row w-full h-full items-center">
          <article className="flex flex-col w-[100%] lg:w-[50%] h-full">
            <header className="p-8">
              <h1 className="text-3xl font-bold text-green-600">Lunes</h1>
            </header>
            <div className="py-3 px-8 font-comun">
              <p className="w-[100%]">
                Tostadas integrales con mermelada de fresas y rodajas de
                plátano. Acompañar con un vaso de leche o batido de frutas.
              </p>
              <br />
              <p className="font-bold">Ingredientes: </p>
              <ul className="list-disc px-10 py-2">
                <li className="underline decoration-green-500 decoration-2">Tostadas integrales.</li>
                <li className="underline decoration-green-500 decoration-2">Mermelada de fresa.</li>
                <li className="underline decoration-green-500 decoration-2">Plátano.</li>
                <li className="underline decoration-green-500 decoration-2">Vaso de leche o jugo de frutas.</li>
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

export default Lunes;
