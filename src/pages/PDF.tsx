import { PDFViewer } from "@react-pdf/renderer";
import { FC } from "react";
import { PDFDocument } from "../components/PDFDocument";

export const PDF: FC = () => (
  <PDFViewer width="100%" height="100%">
    <PDFDocument />
  </PDFViewer>
);
