import React from 'react';

import ReactMarkdown from 'react-markdown';

import { correctImageUrl } from '@utils';

interface MarkdownContentProps {
  content: string;
  opt?: JSX.Element;
}

export const MarkdownContent: React.FC<MarkdownContentProps> = ({
  content,
  opt,
}) => {
  /* eslint-disable */
  const defaultStyling = {
    p: ({ node, ...props }) => <p className="mb-8" {...props} />,
    h1: ({ node, ...props }) => (
      <h2 className="mt-8 mb-4 text-3xl font-semibold" {...props} />
    ),
    h2: ({ node, ...props }) => (
      <h2 className="mt-8 mb-4 text-3xl font-semibold" {...props} />
    ),
    img: ({ node, ...props }) => (
      <img
        className="my-4 mx-auto"
        {...props}
        src={correctImageUrl(String(props.src))}
      />
    ),
    a: ({ node, ...props }) => (
      <a className="text-red-800" target="_blank" {...props} />
    ),
  };

  return (
    <ReactMarkdown components={defaultStyling} {...opt}>
      {content}
    </ReactMarkdown>
  );
};
