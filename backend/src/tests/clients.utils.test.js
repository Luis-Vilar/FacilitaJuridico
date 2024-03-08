const {
  bodyValidatorPostClient,
  validarEmail,
} = require("../utils/clients.utils");
//mocks
const badReq = {
  body: {
    name: "name",
    email: 123,
    phone: 1234,
    latitud: 123,
    longitud: 123,
  },
};
const goodReq = {
  body: {
    name: "name",
    email: "email@dominio.com",
    phone: "12345678",
    latitud: 123,
    longitud: 123,
  },
};
const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
const next = jest.fn();
describe("Testing of bodyValidatorPostClient of clients.utils", () => {
  test("Should by return 400", () => {
    bodyValidatorPostClient(badReq, res, next);
    expect(res.status).toHaveBeenCalledWith(400);
  });

  test("Should by return 400", () => {
    bodyValidatorPostClient(badReq, res, next);
    expect(res.json).toHaveBeenCalledWith({
      message: "phone must be a string",
      message: "email must be a string",
    });
  });

  test("Should by call next function", () => {
    bodyValidatorPostClient(goodReq, res, next);
    expect(next).toHaveBeenCalled();
  });
});

describe("Testing ofvalidaEmail of clients.utils", () => {
  test("Should return true when a valid email has passed", () => {
    const validEmails = [
      "email@gmail.dev",
      "other@hotmail.org",
      "user@dominio.com.br",
    ];
    validEmails.forEach((email) => {
      const result = validarEmail(email);
      expect(result).toBe(true);
    });
  });
  test("Should return false when a invalid emai has passed", () => {
    const invalidEmails = [
      "email@dominio",
      "email@dominio.",
      "emaildominio.com",
    ];
    invalidEmails.forEach((email) => {
      const result = validarEmail(email);
      expect(result).toBe(false);
    });
  });
});
