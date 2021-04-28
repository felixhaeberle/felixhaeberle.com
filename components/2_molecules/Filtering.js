import Button, { ButtonItem } from '../1_atoms/Button'

import CardWritings from '../../components/2_molecules/CardWritings'
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
    
    let writings;
    if(this.state.filter.length === 0){
      writings = this.props.writings;
    } else {
      writings = this.props.writings.filter((writing) => {  
        const writingCategories = writing.categories.map((category) => category.handle)
        if (writingCategories.some(r=> this.state.filter.includes(r))){
          console.log('match')
          return writing
        }
      })
    }

    return (
      <>
        {/* Filtering */}
        <FilterWrapper> 
          <Text.Mono.Dark>Filter by category</Text.Mono.Dark>
          <FilterItem>
            {this.props.categories.map((category, index) => (
              <Button 
                title={category.title} 
                symbol={category.symbol} 
                onClick={() => this.handleFilter(category.handle)} 
                className={this.state.filter.includes(category.handle) ? 'active' : ''}
                key={index} />
            ))}
          </FilterItem>
        </FilterWrapper>
        {/* Writing List */}
        <r-grid columns="6" columns-s="2" columns-xs="1">
        {writings.map((writing, index) => (
          <CardWritings 
            title={writing.title}
            link={'/writings/' + writing.slug}
            shortText={writing.teaserSmall}
            longText={writing.teaser}
            date={writing.publishedAt}
            key={index}
          />
        ))}
      </r-grid>
    </>
  )
  } 
}

export default React.memo(Filtering);