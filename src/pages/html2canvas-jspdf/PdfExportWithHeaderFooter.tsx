import { FC, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PdfExportWithHeaderFooter: FC = () => {
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
      const pdf = new jsPDF("p", "mm", "a4");
      // 4️. PDFの幅と高さを取得
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // 5️. ヘッダーとフッターの高さ（mm）を設定
      const headerHeight = 15;
      const footerHeight = 15;
      // 6️. 画像の幅と高さを取得
      const imageWidth = canvas.width;
      const imageHeight = canvas.height;
      // 7️. 画像のスケール比を計算（PDFの幅に合わせる）
      const ratio = pdfWidth / imageWidth;
      // 8️. 画像全体をPDFに合わせた場合の高さを計算
      const scaledHeight = imageHeight * ratio;
      // 9️. 1ページあたりの描画可能な高さを計算（ヘッダーとフッター分を除く）
      const availableHeight = pdfHeight - headerHeight - footerHeight;

      /** 現在の描画開始位置（スケール後の画像上でのY座標） */
      let position = 0;
      /** 現在のページ番号 */
      let pageNumber = 1;

      // 10️. 画像全体が描画されるまでループ
      // 条件：position（描画開始位置）がscaledHeight（スケール後の画像全体の高さ）より小さい間
      while (position < scaledHeight) {
        // 11. 画像を追加
        // - x: 0（左端から配置）
        // - y: headerHeight - position とすることで、ヘッダーの下から画像の適切な部分を描画
        // ※ position が増えると画像が上にシフトし、次ページ以降は前ページの続きが描画される
        pdf.addImage({
          imageData: imageData,
          format: "PNG",
          x: 0,
          y: headerHeight - position,
          width: pdfWidth,
          height: scaledHeight,
        });

        // 12. ヘッダーを追加（ページ上部に中央配置）
        pdf.setFontSize(8);
        pdf.text("PDF Header", pdfWidth / 2, headerHeight / 2 + 3, {
          align: "center",
        });

        // 13. フッターを追加（ページ下部に中央配置、ページ番号を表示）
        pdf.setFontSize(8);
        pdf.text(
          `Page ${pageNumber}`,
          pdfWidth / 2,
          pdfHeight - footerHeight / 2,
          { align: "center" }
        );

        // 14️. 次のページへ移行するために、position を1ページ分の利用可能な高さ分進める
        position += availableHeight;
        pageNumber++; // ページ番号を更新

        // 15️. まだ描画していない画像部分が残っている場合は新しいページを追加
        if (position < scaledHeight) {
          pdf.addPage();
        }
      }

      // 16️. PDFを保存
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
        style={{
          padding: 24,
          color: "blue",
          backgroundColor: "white",
          width: 500,
          margin: "0 auto",
        }}
      >
        <h2>aaaPDF化するコンテンツ</h2>
        <p>
          この部分がPDFとして出力されます。試しに長い文章を追加してみましょう。
        </p>
        {[...Array(100)].map((_, i) => (
          <p key={i}>
            さらに長いコンテンツを追加して、ページ分割が発生することを確認します。
          </p>
        ))}
      </div>

      {/* PDFダウンロードボタン */}
      <button
        onClick={handleDownloadPdf}
        style={{ color: "blue", backgroundColor: "white" }}
      >
        PDFをダウンロード
      </button>
    </div>
  );
};

export default PdfExportWithHeaderFooter;
