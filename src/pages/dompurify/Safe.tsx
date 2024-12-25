import { FC } from "react";
import DOMPurify from "dompurify";

export const Safe: FC = () => {
  const potentiallyUnsafeHTML = `
    <div>
      <h2>Hello World!</h2>
      <script>alert("This is unsafe!");</script>
      <button onclick="alert('Still unsafe!')">Click me</button>
    </div>
  `;

  const sanitizedHTML = DOMPurify.sanitize(potentiallyUnsafeHTML);

  return (
    <div>
      <h2>With DOMPurify</h2>
      <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
    </div>
  );
};
