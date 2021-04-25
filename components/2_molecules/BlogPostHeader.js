import Date from '../0_helpers/date'
import Text from '../1_atoms/Text'
import styled from 'styled-components'

const BlogPostHeaderItem = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: calc(var(--unit) *25);
  margin-bottom: calc(var(--unit)*11.875);
`

BlogPostHeaderItem.Date = styled(Text.Mono.Dark)``

BlogPostHeaderItem.Title = styled(Text.Large)`
  text-align: center;
  width: 80%;
  margin: 0 auto;
`

BlogPostHeaderItem.Categories = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin-top: calc(var(--unit)*5);
`

BlogPostHeaderItem.Category = styled(Text.Medium.Dark)``


export default function BlogHeader({date, title, categories}) {
  return (
    <BlogPostHeaderItem>
      <BlogPostHeaderItem.Date>
        <Date dateString={date} formatString={'dd. MMMM yyyy'}/>
      </BlogPostHeaderItem.Date>
      <BlogPostHeaderItem.Title>
        {title}
      </BlogPostHeaderItem.Title>
      <BlogPostHeaderItem.Categories>
        {categories.map((category, i, arr) => {
          if (arr.length - 1 === i) {
            return (
              <BlogPostHeaderItem.Category key={i}>
                {category.title}
              </BlogPostHeaderItem.Category>)
          } else {
            return (
              <BlogPostHeaderItem.Category key={i}>
                {category.title + ','}&nbsp;
              </BlogPostHeaderItem.Category>)
          }
        })}
      </BlogPostHeaderItem.Categories>
    </BlogPostHeaderItem>
  )
}