import React from "react";
import ErrorPage from "next/error";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { getAllArticleSummaries } from "../../lib/api";
import { Context } from "../../interface/Context";
import { ArticleSummary } from "../../interface/ArticleSummary";
import { Paths } from "../../interface/Paths";
import { HomeHeader } from "../../components/HomeHeader";
import Head from "next/head";

export default function EntireArticle(props: Record<string, string>): JSX.Element {
  const router = useRouter();
  const slug: string = props.slug;
  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }
  const DMXComponent = dynamic(() => import(`../../_articles/${slug}/index.mdx`));

  return (
    <>
      <Head>
        <link rel="canonical" href={`/article/${slug}`} key={`canonical-${slug}`} />
      </Head>
      <div>
        <HomeHeader />
        <article>
          <div id="markdown">
            <DMXComponent />
          </div>
        </article>
      </div>
    </>
  );
}

export async function getStaticProps(context: Context): Promise<{ props: { slug: unknown } }> {
  const params = context.params as Record<string, unknown>;

  return {
    props: {
      slug: params.slug ? params.slug : "",
    },
  };
}

export async function getStaticPaths(): Promise<Paths> {
  const summaries = getAllArticleSummaries();

  return {
    paths: summaries.map((summary: ArticleSummary) => {
      return {
        params: {
          slug: summary.slug,
        },
      };
    }),
    fallback: false,
  };
}
