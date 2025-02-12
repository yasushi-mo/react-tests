import { useRef } from "react";

export function PdfExportSample() {
  /** PDF化する対象の要素を参照するための useRef */
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      {/* PDFに変換する対象のエリア */}
      <div ref={contentRef} style={{ padding: 24, backgroundColor: "blue" }}>
        <h2>PDF化するコンテンツ</h2>
        <p>この部分がPDFとして出力されます。</p>
      </div>

      {/* PDFダウンロードボタン */}
      <button style={{ backgroundColor: "blue" }}>PDFをダウンロード</button>
    </div>
  );
}
