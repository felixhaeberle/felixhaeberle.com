import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import Text from './Text'
import adjustedSyntaxStyles from '../0_helpers/syntaxStyles';
import dynamic from "next/dynamic";
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';
import styled from 'styled-components'
import { useEffect } from "react";

const SyntaxHighlighterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 calc(var(--unit)*-4) calc(var(--unit)*9.375);
  width: calc(100% + calc(var(--unit)*8));
`

SyntaxHighlighterItem.Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(var(--unit)*9.375);
  height: calc(var(--unit)*4.375);
  margin-right: calc(var(--unit)*4);
  background-color: rgba(var(--colorButtonBgRGB),0.7);
  border-radius: 8px 8px 0 0;
`

SyntaxHighlighterItem.Text = styled(Text.Mono.Dark)`
  margin-bottom: 0;
`

SyntaxHighlighterItem.SyntaxWrapper = styled.pre`
  width: 100%;
  height: min(450px, 100%);
  overflow-y: scroll !important; 
`

export default function Syntax({ langCode, code }) {
  useEffect(() => {
    const LoadLanguage = dynamic(
      () => import('react-syntax-highlighter/dist/cjs/languages/prism/' + langCode)
      .then((langCode) => SyntaxHighlighter.registerLanguage(String(langCode), langCode)), {ssr: false})
  }, [])

  // Convert lang string for visual output
  const langCodeUppercase = String(langCode).toUpperCase();
  console.log(style)
  
  // Modify styling
  const editedStyles = adjustedSyntaxStyles(style);

  return(
    <SyntaxHighlighterItem>
      <SyntaxHighlighterItem.Badge>
        <SyntaxHighlighterItem.Text>
          { langCodeUppercase }
        </SyntaxHighlighterItem.Text>
      </SyntaxHighlighterItem.Badge>
      <SyntaxHighlighterItem.SyntaxWrapper>
        <SyntaxHighlighter 
          language={langCode} 
          style={editedStyles}
          wrapLines={true}
          codeTagProps={{style: {fontFamily: 'inherit'} }}>
          { code }
        </SyntaxHighlighter>
      </SyntaxHighlighterItem.SyntaxWrapper> 
    </SyntaxHighlighterItem>
  )
}