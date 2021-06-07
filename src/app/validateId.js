import data from "./data/data.json";

function idLength(id) {
  if (id.length !== 9) {
    return false;
  } else {
    return true;
  }
}

function correctLetter(id) {
  const arrId = id.split("");
  const letterId = [...arrId].pop();
  const letterIdUpperCase = letterId.toUpperCase();
  const numberId = +arrId.filter((item) => item !== letterId).join("");
  const numberOfLetters = 23;
  const restNumberId = (numberId % numberOfLetters).toString();
  const correctLetter = data[restNumberId];
  if (correctLetter === letterIdUpperCase) {
    return true;
  } else {
    return false;
  }
}

function validateId(id) {
  if (idLength(id)) {
    if (correctLetter(id)) {
      const validation = {
        isValid: true,
        error: "",
      };
      return validation;
    } else {
      const validation = {
        isValid: false,
        error: "Incorrect DNI, the letter does not match",
      };
      return validation;
    }
  } else {
    const validation = {
      isValid: false,
      error: "Length not valid",
    };
    return validation;
  }
}

validateId("742342");

export { idLength, correctLetter, validateId };
