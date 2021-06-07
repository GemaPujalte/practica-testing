export function IsPalindrome(str) {
  const newStr = str.replace(/[\W_]/g, "").toLowerCase();
  const strReversed = newStr.split("").reverse().join("");

  return newStr === strReversed ? "es palindromo" : "no es palindromo";
}

IsPalindrome("Salta Lenín el atlas");
