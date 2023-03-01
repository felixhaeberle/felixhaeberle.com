import Text from './Text'
import styled from 'styled-components'

export const BlogPostParagraph = styled(Text)`
  font-weight: 400;
  font-size: calc(var(--unit)*2.25);
  line-height: calc(var(--unit)*3.75);
  margin-bottom: calc(var(--unit)*4.75);
`

BlogPostParagraph.Bold = styled(BlogPostParagraph)`
  font-weight: 500;
`

BlogPostParagraph.Code = styled.code`
  display: inline;
  position: relative;
  top: -1px;
  font-family: var(--fontMono);
  font-weight: 400;
  font-size: 0.9em;
  margin: -1px 1px;
  padding: 4.5px 8px;
  background-color: rgba(var(--colorButtonBgRGB), 0.75);
  border-radius: 2px;
  box-decoration-break: clone;
`

BlogPostParagraph.Underline = styled(BlogPostParagraph)`
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 2px;
  text-decoration-color: rgba(var(--colorTextDarkRBG), 0.7);
`

BlogPostParagraph.Italic = styled(BlogPostParagraph)`
  font-family: var(--fontMono);
  font-weight: 500;
  letter-spacing: -0.75px;
  font-size: 0.95em;
  color: #0f57d3;
`

BlogPostParagraph.Link = styled(BlogPostParagraph)`
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 2px;
  text-decoration-color: rgba(var(--colorTextDarkRBG), 0.7);
  transition: 0.25s;
  cursor: pointer;
  word-wrap:break-word;

  &:hover {
    cursor: pointer;
    text-decoration-color: rgba(var(--colorTextDarkRBG), 1);
  }
`