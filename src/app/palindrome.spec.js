import { IsPalindrome } from "./palindrome";

describe("Validate palindromo", () => {
  it("should write Es palindromo when the sentence is a palindrome", () => {
    const sentenceToChecked = "Salta Lenín el atlas";
    const result = IsPalindrome(sentenceToChecked);
    expect(result).toBe("es palindromo");
  });

  it("should write No es palindromo when the sentence is not a palindrome", () => {
    const sentenceToChecked = "Salta Lenín el río";
    const result = IsPalindrome(sentenceToChecked);
    expect(result).toBe("no es palindromo");
  });
});
