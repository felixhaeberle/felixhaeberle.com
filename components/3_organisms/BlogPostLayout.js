import styled from 'styled-components'

const BlogPostLayoutItem = styled.div`
  max-width: min(800px, 100%);
  margin: 0 auto;
`

export default function BlogPostLayout({ children }) {
  return (
    <BlogPostLayoutItem>
      { children }
    </BlogPostLayoutItem>
  )
}