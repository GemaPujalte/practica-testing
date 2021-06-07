import { idLength, correctLetter, validateId } from "./validateId";

describe("Id Validation", () => {
  it("length should be true", () => {
    const idToChecked = "71148485D";
    const lengthResult = idLength(idToChecked);
    expect(lengthResult).toBe(true);
  });
  it("length should be false", () => {
    const idToChecked = "71148485";
    const lengthResult = idLength(idToChecked);
    expect(lengthResult).toBe(false);
  });
  it("it should write true when the letter is the one according to the algorithm", () => {
    const idToChecked = "71148485D";
    const letterResult = correctLetter(idToChecked);
    expect(letterResult).toBe(true);
  });
  it("it should write false when the letter is not the one according to the algorithm", () => {
    const idToChecked = "71148485T";
    const letterResult = correctLetter(idToChecked);
    expect(letterResult).toBe(false);
  });
  it("it should write is correct when the id is valid", () => {
    const idToChecked = "71148485D";
    const result = validateId(idToChecked);
    expect(result).toEqual({
      isValid: true,
      error: "",
    });
  });
  it("it should write is not correct when the id is not valid", () => {
    const idToChecked = "71148485T";
    const result = validateId(idToChecked);
    expect(result).toEqual({
      isValid: false,
      error:
        "El DNI es incorrecto porque la letra no coincide con la que debería",
    });
  });
  it("it should write is incorrect because the length is not correct", () => {
    const idToChecked = "7114848";
    const result = validateId(idToChecked);
    expect(result).toEqual({
      isValid: false,
      error: "La longitud no es correcta",
    });
  });
});
