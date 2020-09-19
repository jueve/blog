import fs from "fs";
import { join } from "path";
import { ArticleSummary } from "../interface/ArticleSummary";
import { PATH_TO_ARTICLES } from "./constant";

export function getDirectoriesBySlug(): Array<string> {
  return fs.readdirSync(PATH_TO_ARTICLES);
}

export function getAllArticleSummaries(): Array<ArticleSummary> {
  const slugs: Array<string> = getDirectoriesBySlug();
  const summaries = slugs
    .map((slug) => {
      const fullPath = join(PATH_TO_ARTICLES, `/${slug}/header.json`);
      const metadata = fs.readFileSync(fullPath);
      return JSON.parse(metadata.toString());
    })
    .sort((a: ArticleSummary, b: ArticleSummary) => (b.date < a.date ? -1 : 1));
  return summaries;
}
