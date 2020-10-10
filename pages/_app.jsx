import "../styles/index.css";
import "../styles/markdown.css";
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXComponents } from "../components/MDXComponents";
import Head from "next/head";

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title key="title-home">cashitsuki</title>
      </Head>
      <div id="wrapper" className="container mx-auto">
        <div id="inner">
          <MDXProvider components={MDXComponents}>
            <Component {...pageProps} />
          </MDXProvider>
        </div>
      </div>
    </>
  );
}
