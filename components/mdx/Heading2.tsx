import React from "react";
import { MDXProviderProps } from "@mdx-js/react";

export function Heading2(props: MDXProviderProps): JSX.Element {
  return <h2 className="mt-24 text-3xl">{props.children}</h2>;
}
