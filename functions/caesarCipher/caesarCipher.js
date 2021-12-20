export default function caesarCipher(plaintext, shift) {
  if (!shift) {
    throw new Error("Must provide a shift value");
  }

  const lowercasePlainText = plaintext.toLowerCase();
  let ciphertext = "";

  for (let i = 0; i < lowercasePlainText.length; i++) {
    let code = lowercasePlainText.charCodeAt(i);

    if (surpasesMax(code, shift)) {
      code = getWrappedCode(code, shift) + shift;
    } else if (isInRange(code)) {
      code += shift;
    }

    ciphertext += String.fromCharCode(code);
  }

  return ciphertext;
}

const surpasesMax = (code, shift) => {
  return code + shift > 122;
};

const isInRange = (code) => {
  return 97 <= code && code <= 122;
};

const getWrappedCode = (code) => {
  return 97 + (code - 123);
};
