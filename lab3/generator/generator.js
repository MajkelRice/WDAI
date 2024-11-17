function generate() {
  const upperCase = document.getElementById("capital");
  const specialChars = document.getElementById("special");
  const maxSize = parseInt(document.getElementById("max-size").value);
  const minSize = parseInt(document.getElementById("min-size").value);

  const lowercaseLetters = Array.from("abcdefghijklmnopqrstuvwxyz");
  const numbers = Array.from("1234567890");
  const uppercaseLetters = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  const specialCharacters = Array.from("!@#$%^&*()_+[]{}|;:'\",.<>?/`~");

  let array = [...lowercaseLetters, ...numbers];
  if (upperCase.checked) {
    array = array.concat(uppercaseLetters);
  }
  if (specialChars.checked) {
    array = array.concat(specialCharacters);
  }

  const randomLen = Math.floor(Math.random() * (maxSize - minSize)) + minSize;

  let myPassword = "";
  for (let i = 0; i < randomLen; i++) {
    myPassword += array[Math.floor(Math.random() * array.length)];
  }

  alert("Generated password: " + myPassword);
}
