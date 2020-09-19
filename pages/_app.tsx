import "../styles/index.css";
import "../styles/markdown.css";
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { codeBlock } from "../components/CodeBlock";
import { AppProps } from "next/app";

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }: AppProps) {
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
