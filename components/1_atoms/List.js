import media from '../0_helpers/viewportValues'
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  ${props => props.responsiveColumnView ? (media.between('small', 'medium')`
    display: flex;
    flex-wrap: wrap;
  `) : ''}
`

List.Item = styled.li`
  margin: 0 0 1.25rem;

  ${props => props.responsiveColumnView ? (media.between('small', 'medium')`
    width: 50%;
  `) : ''}
`

export default List;