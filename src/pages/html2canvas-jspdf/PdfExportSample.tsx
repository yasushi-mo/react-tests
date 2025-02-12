import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

export function PdfExportSample() {
  /** PDF化する対象の要素を参照するための useRef */
  const contentRef = useRef<HTMLDivElement>(null);

  /** PDFダウンロード処理 */
  const handleDownloadPdf = async () => {
    if (!contentRef.current) return;

    try {
      // 1️⃣ 指定した要素をキャプチャしてCanvasに変換
      const canvas = await html2canvas(contentRef.current);

      // 2️⃣ Canvasを画像として取得（Base64のPNGデータ）
      const imgSrc = canvas.toDataURL("image/png");

      // 3️⃣ jsPDF インスタンスを作成（A4縦向き）
      const pdf = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });

      // 4️⃣ PDFの幅を取得し、アスペクト比を維持した高さを計算
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      // 5️⃣ 画像をPDFに追加（左上から配置）
      pdf.addImage(imgSrc, "PNG", 0, 0, pdfWidth, pdfHeight);

      // 6️⃣ PDFをダウンロード
      pdf.save("document.pdf");
    } catch (error) {
      console.error("PDF生成中にエラーが発生しました:", error);
    }
  };

  return (
    <div>
      {/* PDFに変換する対象のエリア */}
      <div ref={contentRef} style={{ padding: 24, backgroundColor: "blue" }}>
        <h2>PDF化するコンテンツ</h2>
        <p>この部分がPDFとして出力されます。</p>
      </div>

      {/* PDFダウンロードボタン */}
      <button onClick={handleDownloadPdf} style={{ backgroundColor: "blue" }}>
        PDFをダウンロード
      </button>
    </div>
  );
}
