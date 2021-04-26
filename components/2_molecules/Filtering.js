import Button, { ButtonItem } from '../1_atoms/Button'

import React from 'react'
import Text from '../1_atoms/Text'
import styled from 'styled-components'

const FilterWrapper = styled.div`
  display: block;
  margin-top: calc(var(--unit)*12.5);
`

const FilterItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  
  ${ButtonItem} {
    margin-right: calc(var(--unit)*2.5);
    margin-bottom: calc(var(--unit)*2.5);
  }
`


class Filtering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: []
    }
    this.handleFilter = this.handleFilter.bind(this)
  }

  handleFilter = (key) => {
    this.state.filter.includes(key) ? 
      this.setState({filter: this.state.filter.filter(e => e !== key)}) : 
      this.setState({filter: [...this.state.filter, key]})
  }

  render() {
    return (
      <FilterWrapper> 
        <Text.Mono.Dark>Filter by category</Text.Mono.Dark>
        <FilterItem>
          {this.props.categories.map((category) => (
            <Button title={category.title} symbol={category.symbol} onClick={() => this.handleFilter(category.handle)} className={this.state.filter.includes(category.handle) ? 'active' : ''}/>
          ))}
        </FilterItem>
      </FilterWrapper>
    )
  } 
}

export default React.memo(Filtering);

export async function getStaticProps() {
  

  return {
    props: {
      categories: categories
    }
  }
}