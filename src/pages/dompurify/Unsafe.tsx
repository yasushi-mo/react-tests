import { FC } from "react";

export const Unsafe: FC = () => {
  const potentiallyUnsafeHTML = `
    <div>
      <h2>Hello World!</h2>
      <script>alert('This is unsafe!');</script>
      <button onclick="alert('Still unsafe!')">Click me</button>
      <a href="https://example.com" target="_blank">
        Visit Example
      </a>
    </div>
  `;

  return (
    <div>
      <h2>Without DOMPurify</h2>
      <div dangerouslySetInnerHTML={{ __html: potentiallyUnsafeHTML }} />
    </div>
  );
};
