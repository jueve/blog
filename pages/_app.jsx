import "../styles/index.css";
import "../styles/markdown.css";
import "tailwindcss/dist/tailwind.min.css";
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { codeBlock } from "../components/CodeBlock";

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  return (
    <div id="wrapper" className="container mx-auto">
      <div id="inner">
        <MDXProvider components={codeBlock}>
          <Component {...pageProps} />
        </MDXProvider>
      </div>
    </div>
  );
}
