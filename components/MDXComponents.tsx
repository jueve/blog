import { MDXProviderProps } from "@mdx-js/react";
import { Preformatted } from "./mdx/Preformatted";
import { Heading2 } from "./mdx/Heading2";
import { Heading3 } from "./mdx/Heading3";
import { Paragraph } from "./mdx/Paragraph";
import { Anchor } from "./mdx/Anchor";
import { Code } from "./mdx/Code";
import { OrderedList } from "./mdx/OrderedList";
import { UnorderedList } from "./mdx/UnorderedList";
import { BlockQuote } from "./mdx/BlockQuote";
import { ListItem } from "./mdx/ListItem";

export const MDXComponents = {
  h2: (props: MDXProviderProps): JSX.Element => Heading2(props),
  h3: (props: MDXProviderProps): JSX.Element => Heading3(props),
  p: (props: MDXProviderProps): JSX.Element => Paragraph(props),
  a: (props: MDXProviderProps): JSX.Element => Anchor(props),
  pre: (props: MDXProviderProps): JSX.Element => Preformatted(props),
  code: (props: MDXProviderProps): JSX.Element => Code(props),
  ol: (props: MDXProviderProps): JSX.Element => OrderedList(props),
  ul: (props: MDXProviderProps): JSX.Element => UnorderedList(props),
  li: (props: MDXProviderProps): JSX.Element => ListItem(props),
  blockquote: (props: MDXProviderProps): JSX.Element => BlockQuote(props),
};
