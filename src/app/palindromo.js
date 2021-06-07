export function IsPalindrome(str) {
  const newStr = str.replace(/[\W_]/g, "").toLowerCase();
  const strReversed = newStr.split("").reverse().join("");

  return newStr === strReversed ? "es palindromo" : "no es palindromo";
}

console.log(IsPalindrome("Salta Lenín el atlas")); // es palindromo
