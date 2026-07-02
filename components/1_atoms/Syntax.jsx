import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import adjustedSyntaxStyles from '../0_helpers/syntaxStyles';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/prism';

export default function Syntax({ langCode, code }) {
  // Convert lang string for visual output
  const langCodeUppercase = String(langCode).toUpperCase();

  // Modify styling
  const editedStyles = adjustedSyntaxStyles(style);

  return(
    <div className="
      flex flex-col items-end
      -mx-[calc(var(--unit)*4)] mb-[calc(var(--unit)*9.375)]
      w-[calc(100%+calc(var(--unit)*8))]
    ">
      <span className="
        flex items-center justify-center
        w-[calc(var(--unit)*9.375)] h-[calc(var(--unit)*4.375)]
        mr-[calc(var(--unit)*4)]
        bg-buttonBg/70
        rounded-t-lg
      ">
        <span className="font-mono text-lg text-text font-medium tracking-custom uppercase text-textDark mb-0">
          {langCodeUppercase}
        </span>
      </span>
      <pre className="w-full h-[min(450px,100%)] overflow-y-scroll">
        <SyntaxHighlighter 
          language={langCode} 
          style={editedStyles}
          wrapLines={true}
          codeTagProps={{style: {fontFamily: 'inherit'} }}>
          {code}
        </SyntaxHighlighter>
      </pre>
    </div>
  )
}