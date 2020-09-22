import React from "react";
import { ArticleSummary } from "../interface/ArticleSummary";

export function ArticleHeader(articleSummary: ArticleSummary): JSX.Element {
  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold">{articleSummary.title}</h1>
      <span className="text-xl date">{articleSummary.date}</span>
    </div>
  );
}
