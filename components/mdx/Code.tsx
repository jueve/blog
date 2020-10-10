import React from "react";
import { MDXProviderProps } from "@mdx-js/react";

export function Code(props: MDXProviderProps): JSX.Element {
  return <code className="bg-gray-300 text-2xl">{props.children}</code>;
}
