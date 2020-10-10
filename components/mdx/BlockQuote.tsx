import React from "react";
import { MDXProviderProps } from "@mdx-js/react";

export function BlockQuote(props: MDXProviderProps): JSX.Element {
  return <blockquote className="mt-6 mb-4 pl-4 border-l-4 text-gray-600">{props.children}</blockquote>;
}
