import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="shorcut icon" href="/favicon/favicon.ico" />
          <meta
            name="description"
            content="blog posts by cashitsuki(かしつき) who is interested in front-end development"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
