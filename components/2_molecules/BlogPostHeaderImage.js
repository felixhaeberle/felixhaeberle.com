import styled from 'styled-components'

const BlogPostHeaderImageItem = styled.div`
  margin: 0 calc(var(--unit)*-12);
`

export default function BlogPostHeaderImage({ children }){
  return (
    <BlogPostHeaderImageItem>
      { children }
    </BlogPostHeaderImageItem>
  )
}