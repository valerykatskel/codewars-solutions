function isPalindrome(x) {
  const p = x.toLowerCase().replace(/\s+/g, "");
  return p == p.split("").reverse().join("");
}
