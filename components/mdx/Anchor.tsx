import React from "react";
import { MDXProviderProps } from "@mdx-js/react";

export function Anchor(props: MDXProviderProps): JSX.Element {
  const href = props.href ? props.href : "";
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className="text-blue-700">
      {props.children}
    </a>
  );
}
