import React from "react";
import { MDXProviderProps } from "@mdx-js/react";

export function Heading3(props: MDXProviderProps): JSX.Element {
  return <h3 className="mt-20 mb-2 text-xl">{props.children}</h3>;
}
