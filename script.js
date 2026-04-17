function firstChar(text) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== " ") {
      return text[i];
    }
  }
  return ""; // if only spaces or empty string
}

// input घेण्यासाठी
const text = prompt("Enter text:");

alert(firstChar(text));