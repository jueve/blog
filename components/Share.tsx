import React from "react";
import { ArticleSummary } from "../interface/ArticleSummary";

export function Share(articleSummary: ArticleSummary): JSX.Element {
  return (
    <div className="mt-10">
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button"
        data-text={articleSummary.title}
        data-show-count="false"
      >
        Tweet
      </a>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
    </div>
  );
}
