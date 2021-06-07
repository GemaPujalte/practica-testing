import { idLength, correctLetter, validateId } from "./validateId";

describe("Id Validation", () => {
  it("length should be true", () => {
    const idToChecked = "74234261J";
    const lengthResult = idLength(idToChecked);
    expect(lengthResult).toBe(true);
  });
  it("length should be false", () => {
    const idToChecked = "74234261";
    const lengthResult = idLength(idToChecked);
    expect(lengthResult).toBe(false);
  });
  it("it should write true when the letter is the one according to the algorithm", () => {
    const idToChecked = "74234261J";
    const letterResult = correctLetter(idToChecked);
    expect(letterResult).toBe(true);
  });
  it("it should write false when the letter is not the one according to the algorithm", () => {
    const idToChecked = "74234261H";
    const letterResult = correctLetter(idToChecked);
    expect(letterResult).toBe(false);
  });
  it("it should write is correct when the id is valid", () => {
    const idToChecked = "74234261J";
    const result = validateId(idToChecked);
    expect(result).toEqual({
      isValid: true,
      error: "",
    });
  });
  it("it should write is not correct when the id is not valid", () => {
    const idToChecked = "74234261H";
    const result = validateId(idToChecked);
    expect(result).toEqual({
      isValid: false,
      error: "Incorrect DNI, the letter does not match",
    });
  });
  it("it should write is incorrect because the length is not correct", () => {
    const idToChecked = "742342";
    const result = validateId(idToChecked);
    expect(result).toEqual({
      isValid: false,
      error: "Length not valid",
    });
  });
});
