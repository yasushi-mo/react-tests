import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  aesDecrypt,
  aesEncrypt,
  generateCryptoKey,
} from "../../libs/crypto/crypto";

type FormInput = { plainText: string };

export const Crypto: FC = () => {
  const { handleSubmit, register } = useForm<FormInput>();

  const [cryptoKey, setCryptoKey] = useState<CryptoKey | undefined>(undefined);
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");

  useEffect(() => {
    const generateKey = async () => {
      try {
        const key = await generateCryptoKey();
        setCryptoKey(key);
      } catch (error) {
        console.error("Error generating key:", error);
      }
    };

    generateKey();
  }, []);

  const onEncrypt = async (formInput: FormInput) => {
    try {
      if (!cryptoKey) throw new Error("Crypto key is undefined");

      const encrypted = await aesEncrypt(cryptoKey, formInput.plainText);
      setEncryptedText(encrypted);
    } catch (e) {
      alert(`error:${e}`);
      setEncryptedText("");
    }
  };

  const onDecrypt = async (key: CryptoKey | undefined, encrypted: string) => {
    if (!key) return alert("crypto key is undefined");

    try {
      const decrypted = await aesDecrypt(key, encrypted);
      setDecryptedText(decrypted);
    } catch (e) {
      alert(`error:${e}`);
      setDecryptedText("");
    }
  };

  return (
    <div>
      <h2>Crypto</h2>
      <h3>AES-GCM 128</h3>
      <form onSubmit={handleSubmit(onEncrypt)}>
        <label htmlFor="plainText">Plain Text: </label>
        <input type="text" {...register("plainText")} />
        <button type="submit">AES Encrypt</button>
      </form>
      <p>Encrypted Text: {encryptedText}</p>

      <br />
      <button onClick={() => onDecrypt(cryptoKey, encryptedText)}>
        AES Decrypt
      </button>
      <p>Decrypted Text: {decryptedText}</p>
    </div>
  );
};
