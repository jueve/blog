import React from "react";
import { ArticleSummary } from "./ArticleSummary";
import { ArticleSummary as Summary, ArticleSummaries } from "../interface/ArticleSummary";

export function ArticleList(summaries: ArticleSummaries): JSX.Element {
  const allArticles: Array<Summary> = summaries.summaries;
  return (
    <div>
      <div className="mb-2">
        <h2 className="text-xl">Blog</h2>
      </div>
      <div>
        {allArticles.map((summary: Summary) => (
          <ArticleSummary {...summary} key={summary.title} />
        ))}
      </div>
    </div>
  );
}
