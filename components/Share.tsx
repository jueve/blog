import React from "react";
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon } from "react-share";
import { ArticleSummary } from "../interface/ArticleSummary";
import { URL } from "../lib/constant";

export function Share(articleSummary: ArticleSummary): JSX.Element {
  const page = `${URL}/article/${articleSummary.slug}`;
  const titleWithName = `「${articleSummary.title}」by cashitsuki`;

  return (
    <div className="mt-10">
      <div className="flex">
        <div className="flex-initial mr-2">
          <TwitterShareButton url={page} title={titleWithName}>
            <TwitterIcon size={42} round />
          </TwitterShareButton>
        </div>
        <div className="flex-initial mr-2">
          <FacebookShareButton url={page} title={titleWithName}>
            <FacebookIcon size={42} round />
          </FacebookShareButton>
        </div>
      </div>
    </div>
  );
}
