import { FC } from "react";
import { generateCryptoKey } from "../../libs/crypto/crypto";

export const Crypto: FC = () => {
  const onGenerateKey = async () => {
    console.log(await generateCryptoKey());
  };

  return (
    <div>
      <h2>Crypto</h2>
      <button onClick={onGenerateKey}>Generate Key</button>
    </div>
  );
};
