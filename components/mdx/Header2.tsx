import React from "react";
import { MDXProviderProps } from "@mdx-js/react";

export function Header2(props: MDXProviderProps): JSX.Element {
  return <h2 className="mt-20 mb-4 text-3xl border-b-2">{props.children}</h2>;
}
