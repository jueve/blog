import React from "react";
import { MDXProviderProps } from "@mdx-js/react";

export function UnorderedList(props: MDXProviderProps): JSX.Element {
  return <ul className="list-disc ml-10 mt-10 mb-10">{props.children}</ul>;
}
