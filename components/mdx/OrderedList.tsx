import React from "react";
import { MDXProviderProps } from "@mdx-js/react";

export function OrderedList(props: MDXProviderProps): JSX.Element {
  return <ol className="list-decimal ml-10 mt-8 mb-10">{props.children}</ol>;
}
