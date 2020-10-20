import React from "react";
import { MDXProviderProps } from "@mdx-js/react";

export function Paragraph(props: MDXProviderProps): JSX.Element {
  return <p className="mb-10 text-md leading-7">{props.children}</p>;
}
