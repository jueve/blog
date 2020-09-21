import React from "react";
import { getAllArticleSummaries } from "../lib/api";
import { ArticleSummaries as Summaries } from "../interface/ArticleSummary";
import { ArticleList } from "../components/ArticleList";
import { HomeHeader } from "../components/HomeHeader";
import Head from "next/head";

export default function Index(summaries: Summaries): JSX.Element {
  return (
    <>
      <Head>
        <title key="title-home">cashitsuki</title>
        <link rel="canonical" href="/" key="canonical-home" />
      </Head>
      <div>
        <HomeHeader />
        <ArticleList {...summaries} />
      </div>
    </>
  );
}

export async function getStaticProps(): Promise<{ props: Summaries }> {
  const summaries = getAllArticleSummaries();

  return {
    props: { summaries },
  };
}
