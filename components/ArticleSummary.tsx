import React from "react";
import { ArticleSummary as Summary } from "../interface/ArticleSummary";
import Link from "next/link";

export function ArticleSummary(summary: Summary): JSX.Element {
  return (
    <div className="mb-4">
      <p className="strong">{summary.date}</p>
      <Link href={`/article/${summary.slug}`}>
        <a className="text-lg text-blue-600 underline">{summary.title}</a>
      </Link>
    </div>
  );
}
