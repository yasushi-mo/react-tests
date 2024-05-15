import { FC } from "react";

export const A11Y: FC = () => {
  return (
    <div>
      <h2>
        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y">
          eslint-plugin-jsx-a11y
        </a>
      </h2>
      <h3>autocomplete-valid</h3>
      <input type="text" autoComplete="name" />
      <hr />
      <h3>aria-unsupported-elements</h3>
      <script />
      <hr />
      <h3>aria-role</h3>
      <div role="alert">Test</div>
      <hr />
      <h3>aria-proptypes</h3>
      <div aria-hidden="true">foo</div>
      <hr />
      <h3>aria-props</h3>
      <div>
        <input aria-labelledby="address_label" />
      </div>
      <hr />
      <h3>aria-activedescendant-has-tabindex</h3>
      {/* <div aria-activedescendant="test" tabIndex={0} /> */}
      <hr />
      <h3>anchor-is-valid</h3>
      <div>
        <a href="https://example.com">Example</a>
      </div>
      <hr />
      <h3>anchor-has-content</h3>
      <div>
        <a href="https://example.com">Example</a>
      </div>
      <hr />
      <h3>alt-text</h3>
      <div>
        <img src="test.png" alt="test" />
      </div>
    </div>
  );
};
