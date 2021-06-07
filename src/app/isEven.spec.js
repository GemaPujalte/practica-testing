import { esPar } from "./isEven";

describe("isEven", () => {
  it("should return odd or even", () => {
    const result = esPar(8);
    expect(result).toBe("es par");
  });

  it("should return odd or even", () => {
    const result = esPar(5);
    expect(result).toBe("es impar");
  });
});
