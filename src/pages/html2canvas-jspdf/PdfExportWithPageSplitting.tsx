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
      // 1️. 指定した要素をキャプチャしてCanvasに変換
      const canvas = await html2canvas(contentRef.current);

      // 2️. Canvasを画像として取得（Base64のPNGデータ）
      const imageData = canvas.toDataURL("image/png");

      // 3️. jsPDF インスタンスを作成（A4縦向き）
      const pdf = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });

      // 4️. PDFの幅と高さを取得
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // 5️. 画像の幅と高さを取得
      const imageWidth = canvas.width;
      const imageHeight = canvas.height;

      // 6️. 画像をPDFにフィットさせるための比率を計算
      const ratio = pdfWidth / imageWidth;
      // 7. 画像全体をPDFに合わせた場合の高さを計算
      const scaledHeight = imageHeight * ratio;
      /** 現在の描画開始位置（スケール後の画像上でのY座標） */
      let position = 0;

      // 8. 画像全体が描画されるまでループ
      // 条件：position（描画開始位置）がscaledHeight（スケール後の画像全体の高さ）より小さい間
      while (position < scaledHeight) {
        // 9. 画像を追加
        pdf.addImage({
          imageData: imageData,
          format: "PNG",
          x: 0,
          // 前ページで描画した分を上方向へずらし、新しいページに適切な部分が表示されるように調整
          y: -position,
          width: pdfWidth,
          height: scaledHeight,
        });
        // 10. 1ページ分の高さを加算（ページごとに pdfHeight 分だけ増やす）
        position += pdfHeight;
        // 11. まだ描画していない画像部分が残っている場合は新しいページを追加
        if (position < scaledHeight) {
          pdf.addPage();
        }
      }
      // 12. PDFを保存
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
