import { useBarcode } from "next-barcode";
import { FC } from "react";
import Barcode from "react-barcode";

export const BarcodeLibraries: FC = () => {
  const { inputRef } = useBarcode({
    value: "12345678",
  });

  return (
    <>
      <h2>React Barcode</h2>
      <Barcode value="12345678" />
      <h2>Next Barcode</h2>
      <svg ref={inputRef} />
    </>
  );
};
