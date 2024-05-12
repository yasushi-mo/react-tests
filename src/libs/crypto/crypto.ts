const ALGORITHM_NAME = "AES-GCM";
const KEY_LENGTH = 256;

export const generateCryptoKey = () => {
  const algorithm = {
    name: ALGORITHM_NAME,
    length: KEY_LENGTH,
  };
  const keyUsage = ["encrypt", "decrypt"] as KeyUsage[];

  return crypto.subtle.generateKey(algorithm, true, keyUsage);
};

export const aesEncrypt = async (key: CryptoKey, plainText: string) => {
  const encodedText = new TextEncoder().encode(plainText);

  const algorithm = {
    name: ALGORITHM_NAME,
    iv: crypto.getRandomValues(new Uint8Array(12)),
  };

  const encryptedTextBuffer = await crypto.subtle.encrypt(
    algorithm,
    key,
    encodedText,
  );
  console.log("encryptedTextBuffer:", encryptedTextBuffer);

  const encryptedTextString = window.btoa(
    String.fromCharCode(...new Uint8Array(encryptedTextBuffer)),
  );
  console.log("encryptedTextString:", encryptedTextString);

  return encryptedTextString;
};

export const aesDecrypt = async (key: CryptoKey, encryptedText: string) => {
  // Convert the Base64-encoded string to an ArrayBuffer
  const encryptedTextBuffer = new Uint8Array(
    window
      .atob(encryptedText)
      .split("")
      .map((char) => char.charCodeAt(0)),
  ).buffer;
  console.log("encryptedTextBuffer:", encryptedTextBuffer);

  // Ensure the minimum length for the encrypted data
  if (encryptedTextBuffer.byteLength < 12) {
    throw new Error("Invalid encrypted data");
  }

  // Extract IV (first 12 bytes) and
  const iv = encryptedTextBuffer.slice(0, 12);
  console.log("🚀 ~ aesDecrypt ~ iv:", iv);

  const algorithm = {
    name: ALGORITHM_NAME,
    iv,
  };

  const text = encryptedTextBuffer.slice(12);
  console.log("🚀 ~ aesDecrypt ~ text:", text);

  const decryptedTextBuffer = await crypto.subtle.decrypt(algorithm, key, text);
  console.log("decryptedTextBuffer:", decryptedTextBuffer);

  const decryptedTextString = new TextDecoder().decode(decryptedTextBuffer);
  console.log("decryptedTextString:", decryptedTextString);

  return decryptedTextString;
};
