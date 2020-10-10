import React from "react";
import { MDXProviderProps } from "@mdx-js/react";

export function Paragraph(props: MDXProviderProps): JSX.Element {
  return <p className="mt-6 mb-6 text-md leading-6">{props.children}</p>;
}
