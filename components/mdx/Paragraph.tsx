import React from "react";
import { MDXProviderProps } from "@mdx-js/react";

export function Paragraph(props: MDXProviderProps): JSX.Element {
  return <p className="mt-3 mb-6 text-md leading-7">{props.children}</p>;
}
