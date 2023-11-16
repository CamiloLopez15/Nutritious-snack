/* eslint-disable react/prop-types */

function Tabla({ data }) {
  return (
    <div className="">
                <h2 className="text-xl font-semibold w-full text-center my-10 underline decoration-green-500 decoration-4">
                  Tabla nutricional de una merienda saludable
                </h2>
                <div className="w-full px-8 mb-4">
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                      <thead>
                        <tr>
                          <th className="py-2 px-4 border-b text-center">
                            Categoría
                          </th>
                          <th className="py-2 px-4 border-b text-center">
                            Nombre
                          </th>
                          <th className="py-2 px-4 border-b text-center">
                            Calorías
                          </th>
                          <th className="py-2 px-4 border-b text-center">
                            Proteína
                          </th>
                          <th className="py-2 px-4 border-b text-center">
                            Carbohidratos
                          </th>
                          <th className="py-2 px-4 border-b text-center">
                            Grasa
                          </th>
                          <th className="py-2 px-4 border-b text-center">
                            Fibra
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, index) => (
                          <tr
                            key={index}
                            className={index % 2 === 0 ? "bg-gray-100" : ""}
                          >
                            <td className="py-2 px-4 border-b text-center">
                              {item.category}
                            </td>
                            <td className="py-2 px-4 border-b text-center">
                              {item.name}
                            </td>
                            <td className="py-2 px-4 border-b text-center">
                              {item.calories}
                            </td>
                            <td className="py-2 px-4 border-b text-center">
                              {item.protein || "-"}
                            </td>
                            <td className="py-2 px-4 border-b text-center">
                              {item.carbs || "-"}
                            </td>
                            <td className="py-2 px-4 border-b text-center">
                              {item.fat || "-"}
                            </td>
                            <td className="py-2 px-4 border-b text-center">
                              {item.fiber || "-"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
  )
}

export default Tabla