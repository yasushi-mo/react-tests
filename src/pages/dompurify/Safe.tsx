import { FC } from "react";
import DOMPurify from "dompurify";

export const Safe: FC = () => {
  const unsafeHTML = `
    <div>
      <h2>Hello World!</h2>
      <script>alert("This is unsafe!");</script>
    </div>
  `;

  const sanitizedHTML = DOMPurify.sanitize(unsafeHTML);

  return (
    <div>
      <h2>With DOMPurify</h2>
      <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
    </div>
  );
};
