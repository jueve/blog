export interface ArticleSummary {
  title: string;
  date: string;
  slug: string;
}

export interface ArticleSummaries {
  summaries: Array<ArticleSummary>;
}
