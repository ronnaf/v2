import { Text, TextProps } from "@chakra-ui/layout";
import React from "react";
import ReactMarkdown from "react-markdown";
import { ReactMarkdownOptions } from "react-markdown/lib/react-markdown";

interface Props extends ReactMarkdownOptions {
  fontSize: TextProps["fontSize"];
  color?: TextProps["color"];
}

export const Markdown = ({ fontSize, color, ...props }: Props) => {
  return (
    <ReactMarkdown
      components={{
        p: (props) => (
          <Text fontSize={fontSize} color={color}>
            {props.children}
          </Text>
        ),
      }}
      {...props}
    />
  );
};
