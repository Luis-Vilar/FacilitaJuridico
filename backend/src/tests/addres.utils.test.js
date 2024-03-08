const { calculateRoute } = require("../utils/addres.utils");
const mokedUsers = [
  {
    id: 1,
    name: "Jane",
    mail: "other@dominio.com",
    phone: "987654321",
    latitud: 2,
    longitud: 2,
  },
  {
    id: 2,
    name: "John",
    mail: "email@dominio.com",
    phone: "123456789",
    latitud: 1,
    longitud: 1,
  },
  {
    id: 3,
    name: "Jane",
    mail: "jane@email.com",
    phone: "987654321",
    latitud: 2,
    longitud: 5,
  },
];
const expectedRoute = [
  {
    id: 2,
    name: "John",
    mail: "email@dominio.com",
    phone: "123456789",
    latitud: 1,
    longitud: 1,
  },
  {
    id: 1,
    name: "Jane",
    mail: "other@dominio.com",
    phone: "987654321",
    latitud: 2,
    longitud: 2,
  },
  {
    id: 3,
    name: "Jane",
    mail: "jane@email.com",
    phone: "987654321",
    latitud: 2,
    longitud: 5,
  },
];
describe("Testing of addres.utils", () => {
  test("Should return the best route of all ussers", () => {
    const bestRoute = calculateRoute(mokedUsers);
    expect(bestRoute).toEqual(expectedRoute);
  });
  test("Should return an empty array", () => {
    const bestRoute = calculateRoute([]);
    expect(bestRoute).toEqual([]);
  });
});
