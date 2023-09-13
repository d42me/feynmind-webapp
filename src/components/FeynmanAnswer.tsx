import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css"; // Import styles
import { InlineMath, BlockMath } from "react-katex";

interface FeynmanAnswerProps {
  rawString: string;
}

const FeynmanAnswer: React.FC<FeynmanAnswerProps> = ({ rawString }) => {
  const formattedString = rawString.replace(/\b\d+\.\s/g, (match) => {
    if (!isNaN(Number(match))) {
      return ` ${match} `;
    }
    return match;
  });

  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      components={
        {
          inlineMath: ({ node }: any) => <InlineMath math={node.value} />,
          math: ({ node }: any) => <BlockMath math={node.value} />,
        } as any
      }
    >
      {formattedString}
    </ReactMarkdown>
  );
};

export default FeynmanAnswer;
