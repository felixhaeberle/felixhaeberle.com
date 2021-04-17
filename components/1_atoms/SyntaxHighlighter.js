import dynamic from "next/dynamic";
import Prism from "Prismjs";
import { useEffect } from "react";
import styled from 'styled-components'
import Text from './Text'

const SyntaxHighlighterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 calc(var(--unit)*-4);
  width: calc(100% + calc(var(--unit)*8));
`

SyntaxHighlighterItem.Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(var(--unit)*9.375);
  height: calc(var(--unit)*4.375);
  margin-right: calc(var(--unit)*4);
`

SyntaxHighlighterItem.Text = styled(Text.Mono.Dark)`
  margin-bottom: 0;
`

SyntaxHighlighterItem.SyntaxWrapper = styled.pre`
  min-width: 100%;
  height: min(450px, 100%);
  overflow-y: scroll !important; 
`

export default function SyntaxHighlighter({ langCode, code }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [])

  const langCodeUppercase = String(langCode).toUpperCase();

  return(
    <SyntaxHighlighterItem>
      <SyntaxHighlighterItem.Badge>
        <SyntaxHighlighterItem.Text>
          { langCodeUppercase }
        </SyntaxHighlighterItem.Text>
      </SyntaxHighlighterItem.Badge>
      <SyntaxHighlighterItem.SyntaxWrapper>
        <code className={'language-' + langCode}>
          { code }
        </code>
      </SyntaxHighlighterItem.SyntaxWrapper> 
    </SyntaxHighlighterItem>
  )
}