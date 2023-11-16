import Participante from "../Components/Participante";
import Tabla from "../Components/Tabla";
import img_header from "./../assets/comida-header.jpg";
import Footer from "./../Components/Footer";
import Andrea_Jaraba from "./../assets/Andrea-Jaraba.png";
import Kamila_Cardenas from "./../assets/Kamila-Cardenas.png";
import Kiara_Gomez from "./../assets/Kiara-Gomez.png";
import Valentina_Suarez from "./../assets/Valentina-Suarez.png";
import Ashley_Marin from "./../assets/Ashley-Marin.png";
import Ximena_Sanchez from "./../assets/Ximena-Sanchez.png";
import Cesar_Bolaño from "./../assets/Cesar-Bolaño.png";

const data = [
  {
    category: "Frutas (100gr)",
    name: "Manzana",
    calories: 52,
    protein: 0.3,
    fat: 0.2,
    fiber: 2.4,
  },
  {
    category: "Frutas (100gr)",
    name: "Plátano",
    calories: 89,
    carbs: 23,
    fiber: 2.6,
  },
  {
    category: "Frutas (100gr)",
    name: "Fresas",
    calories: 32,
    carbs: 7.7,
    fiber: 2,
  },
  {
    category: "Frutos secos (30gr)",
    name: "Almendras",
    calories: 164,
    protein: 6,
    fat: 14,
    fiber: 3.5,
  },
  {
    category: "Frutos secos (30gr)",
    name: "Nueces",
    calories: 185,
    protein: 4.3,
    fat: 18,
    fiber: 2,
  },
  {
    category: "Frutos secos (30gr)",
    name: "Pistachos",
    calories: 156,
    protein: 6,
    fat: 12,
    fiber: 3,
  },
  {
    category: "Yogur (150gr)",
    name: "Yogur natural",
    calories: 100,
    protein: 10,
    carbs: 4,
    fiber: 0,
  },
  {
    category: "Vegetales (100gr)",
    name: "Zanahorias",
    calories: 41,
    carbs: 10,
    fiber: 2.8,
  },
  {
    category: "Vegetales (100gr)",
    name: "Pepinos",
    calories: 15,
    carbs: 3.6,
    fiber: 0.5,
  },
  {
    category: "Vegetales (100gr)",
    name: "Tomates",
    calories: 18,
    carbs: 3.9,
    fiber: 1.2,
  },
];

function Inicio() {
  return (
    <>
      <main className="flex w-full h-auto flex-col font-comun min-h-screen actualizacionEstado">
        <header className="flex flex-col-reverse lg:flex-row w-full lg:h-72 h-auto shadow-lg rounded-xl">
          <article className="flex justify-center items-center lg:w-[60%]">
            <p className="text-lg py-4 lg:px-8 px-4">
              <b className="text-green-600">¡Bienvenidos a Healthy Food,</b> tu
              fuente de inspiración para meriendas saludables para niños! En un
              mundo donde la nutrición es clave para el desarrollo de los más
              pequeños, entendemos la importancia de proporcionar opciones
              deliciosas y nutritivas que los niños adoren. Healthy Food es el
              destino ideal para padres preocupados por la salud de sus hijos,
              donde un menu para cada día de la semana el cual fomentará hábitos
              <b className="text-green-600"> alimenticios positivos.</b>
            </p>
          </article>
          <figure className="flex justify-end items-center lg:w-[40%] relative ">
            <img
              src={img_header}
              alt="Madre e hija"
              className="lg:w-[85%] lg:img-header bg-green-600"
            />
          </figure>
        </header>
        <section className="w-full flex flex-col justify-center items-center h-full my-3">
          <article className="p-12">
            <p className="text-center">
              En Healthy Food, nos apasiona transformar la hora de la merienda
              en una experiencia divertida y nutritiva. Nuestra misión es
              ofrecer ideas frescas y equilibradas que no solo satisfagan los
              paladares exigentes de los niños, sino que también promuevan un
              crecimiento saludable y un desarrollo óptimo. <br />
              Desde opciones de snacks llenos de energía hasta recetas
              ingeniosas que involucran a los niños en la preparación, aquí
              encontrarás todo lo que necesitas para hacer de la merienda un
              momento especial.
            </p>
          </article>
          <article className="w-full flex flex-col items-center">
            <div className="flex flex-col justify-center w-full h-full mt-10">
              {/* Texto */}
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-center bg-green-500 flex w-full items-center justify-center p-5 shadow-xl rounded-b-lg mb-5">
                  Listados de productos para una merienda saludable para niños
                  de 6 a 11 años:
                </h2>
                <ul className="pl-10 list-disc">
                  <li>
                    Frutas frescas: Manzanas, plátanos, fresas, uvas, rodajas de
                    naranja, etc.
                  </li>
                  <li>
                    Vegetales frescos: Palitos de zanahoria, apio con
                    mantequilla de maní, rodajas de pepino, etc.
                  </li>
                  <li>
                    Proteínas: Queso bajo en grasa, yogur natural, mantequilla
                    de nueces, hummus con pan integral, etc.
                  </li>
                  <li>
                    Cereales integrales: Galletas de arroz, pan integral o
                    crackers de trigo integral.
                  </li>
                  <li>
                    Bebidas: Agua, leche baja en grasa o batidos de frutas
                    naturales.
                  </li>
                </ul>
              </div>
              {/* Tabla */}
              <Tabla data={data} />
            </div>
          </article>
          <article className="flex flex-col w-full">
            <h2 className="text-xl font-semibold text-center bg-green-500 flex w-full items-center justify-center p-5 shadow-xl rounded-b-lg mb-5">
              Participantes del proyecto.
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-4 p-5">
              <Participante
                img={Andrea_Jaraba}
                nombre="Andrea Jaraba"
                cargo="CEO"
              />
              <Participante
                img={Kamila_Cardenas}
                nombre="Kamilia Cardenas"
                cargo="Gerente administrativa"
              />
              <Participante
                img={Kiara_Gomez}
                nombre="Kiara Gomez"
                cargo="Diseño gráfico"
              />
              <Participante
                img={Valentina_Suarez}
                nombre="Valentina Suarez"
                cargo="Gerente empresarial"
              />
              <Participante
                img={Ashley_Marin}
                nombre="Ashley Marin"
                cargo="Marketing"
              />
              <Participante
                img={Ximena_Sanchez}
                nombre="Ximena Sanchez"
                cargo="Marketing"
              />
              <Participante
                img={Cesar_Bolaño}
                nombre="Cesar Bolaño"
                cargo="Mentor"
              />
            </div>
          </article>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Inicio;
