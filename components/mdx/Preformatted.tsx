import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { MDXProviderProps } from "@mdx-js/react";
import theme from "prism-react-renderer/themes/vsDark";

export function Preformatted(props: MDXProviderProps): JSX.Element {
  const className = props.children.props.className || "";
  const newClassName = className + " pt-8 px-6 mb-4";
  const matches = className.match(/language-(?<lang>.*)/);
  return (
    <div className="overflow-auto code-preview rounded-md">
      <div>
        <Highlight
          {...defaultProps}
          code={props.children.props.children}
          theme={theme}
          language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ""}
        >
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre className={newClassName} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}
