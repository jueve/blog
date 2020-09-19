import React from "react";
import { ArticleSummary as Summary } from "../interface/ArticleSummary";
import Link from "next/link";

export function ArticleSummary(summary: Summary): JSX.Element {
  return (
    <div className="flex mb-3 text-lg">
      <div className="mr-3">{summary.date}</div>
      <div>
        <Link href={`/article/${summary.slug}`}>
          <a className="text-blue-600 underline">{summary.title}</a>
        </Link>
      </div>
    </div>
  );
}
