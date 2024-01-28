const ALGORITHM_NAME = "AES-GCM";
const TAG_LENGTH = 128;

export const generateCryptoKey = () => {
  // const algorithm = {
  // name: 'ECDH',
  // namedCurve: 'P-521'
  // };
  // const keyUsage = ['deriveKey'] as KeyUsage[];
  const algorithm = {
    name: ALGORITHM_NAME,
    length: 128,
  };
  const keyUsage = ["encrypt", "decrypt"] as KeyUsage[];

  return crypto.subtle.generateKey(algorithm, true, keyUsage);
};

export const aesEncrypt = async (key: CryptoKey, plainText: string) => {
  const encodedText = new TextEncoder().encode(plainText);

  const algorithm = {
    name: ALGORITHM_NAME,
    iv: crypto.getRandomValues(new Uint8Array(16)),
    // tagLength: TAG_LENGTH
  };
  const encryptedText = await crypto.subtle.encrypt(
    algorithm,
    key,
    encodedText
  );
  console.log("encrypted:", encryptedText);

  //
  const combinedText = new Uint8Array(
    algorithm.iv.byteLength + encryptedText.byteLength
  );
  combinedText.set(algorithm.iv, 0);
  combinedText.set(new Uint8Array(encryptedText), algorithm.iv.byteLength);

  const combinedTextStr = Array.from(combinedText)
    .map((byte) => String.fromCharCode(byte))
    .join("");

  return window.btoa(combinedTextStr);
};

export const aesDecrypt = async (key: CryptoKey, encryptedData: Uint8Array) => {
  const algorithm = {
    name: ALGORITHM_NAME,
    iv: encryptedData.subarray(0, 16),
    tagLength: TAG_LENGTH,
  };

  return new Uint8Array(
    await crypto.subtle.decrypt(algorithm, key, encryptedData)
  );
};
