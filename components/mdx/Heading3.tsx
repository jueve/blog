import React from "react";
import { MDXProviderProps } from "@mdx-js/react";

export function Heading3(props: MDXProviderProps): JSX.Element {
  return <h2 className="mt-6 mb-4 text-2xl">{props.children}</h2>;
}
