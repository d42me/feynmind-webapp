import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css"; // Import styles
import { InlineMath, BlockMath } from "react-katex";

interface FeynmanAnswerProps {
  rawString: string;
  className?: string;
}

const formatLatexString = (rawString: string) => {
  return rawString
    .replace(/\\ket\{([^}]+)\}/g, "\\( \\ket{$1} \\)")
    .replace(/\\begin{equation\*}([\s\S]*?)\\end{equation\*}/g, "\\[ $1 \\]")
    .replace(
      /\\begin{aligned}([\s\S]*?)\\end{aligned}/g,
      "\\[ \\begin{aligned}$1\\end{aligned} \\]"
    )
    .replace(/\\label{([^}]+)}/g, "")
    .replace(/\\braket\{([^}]+)\}\{([^}]+)\}/g, "\\( \\braket{$1}{$2} \\)")
    .replace(/\\abs\{([^}]+)\}/g, "\\( \\abs{$1} \\)")
    .replace(/\\FLPp/g, "\\( \\FLPp \\)");
};

const FeynmanAnswer: React.FC<FeynmanAnswerProps> = ({
  rawString,
  className,
}) => {
  const formattedString = formatLatexString(rawString);

  return (
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      className={className}
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
