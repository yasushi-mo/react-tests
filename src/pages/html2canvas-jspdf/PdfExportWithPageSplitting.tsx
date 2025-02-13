import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

export function PdfExportWithPageSplitting() {
  /** PDF化する対象の要素を参照するための useRef */
  const contentRef = useRef<HTMLDivElement>(null);

  /** PDFダウンロード処理 */
  const handleDownloadPdf = async () => {
    if (!contentRef.current) return;

    try {
      // 1️⃣ 指定した要素をキャプチャしてCanvasに変換
      const canvas = await html2canvas(contentRef.current);

      // 2️⃣ Canvasを画像として取得（Base64のPNGデータ）
      const imageData = canvas.toDataURL("image/png");

      // 3️⃣ jsPDF インスタンスを作成（A4縦向き）
      const pdf = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });

      // 4️⃣ PDFの幅と高さを取得
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // 5️⃣ 画像の幅と高さを取得
      const imageWidth = canvas.width;
      const imageHeight = canvas.height;

      // 6️⃣ 画像をPDFにフィットさせるための比率を計算
      const ratio = pdfWidth / imageWidth;
      /** 画像全体の高さをPDFの幅に合わせたサイズにスケールした値 */
      const scaledHeight = imageHeight * ratio;
      /** 現在の描画開始位置 */
      let position = 0;

      // 7️⃣ 描画開始位置がスケール後の画像の高さより小さい間、ページを分割して画像を追加
      while (position < scaledHeight) {
        pdf.addImage({
          imageData: imageData,
          format: "PNG",
          x: 0,
          // 前ページで描画した分を上方向へずらし、新しいページに適切な部分が表示されるように調整
          y: -position,
          width: pdfWidth,
          height: scaledHeight,
        });
        // 8️⃣ 1ページ分の高さを加算（ページごとに pdfHeight 分だけ増やす）
        position += pdfHeight;
        // 9️⃣ 画像の全体が描画されていない場合、新しいページを追加
        if (position < scaledHeight) {
          pdf.addPage();
        }
      }
      // 🔟 PDFを保存
      pdf.save("document.pdf");
    } catch (error) {
      console.error("PDF生成中にエラーが発生しました:", error);
    }
  };

  return (
    <div>
      {/* PDFに変換する対象のエリア */}
      <div
        ref={contentRef}
        style={{ padding: 24, backgroundColor: "blue", width: 500 }}
      >
        <h2>PDF化するコンテンツ</h2>
        <p>この部分がPDFとして出力されます。</p>
        {[...Array(100)].map((_, i) => (
          <p key={i}>
            さらに長いコンテンツを追加して、ページ分割が発生することを確認します。
          </p>
        ))}
      </div>

      {/* PDFダウンロードボタン */}
      <button onClick={handleDownloadPdf} style={{ backgroundColor: "blue" }}>
        PDFをダウンロード
      </button>
    </div>
  );
}
