import React from "react";
import { MDXProviderProps } from "@mdx-js/react";

export function ListItem(props: MDXProviderProps): JSX.Element {
  return <li className="mb-3 leading-7">{props.children}</li>;
}
