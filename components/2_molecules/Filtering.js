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
          <Button title={'Frontend Development'} symbol={'Template24'} onClick={() => this.handleFilter('frontend')} className={this.state.filter.includes('frontend') ? 'active' : ''}/>
          <Button title={'Thinking & Design'} symbol={'Idea24'} onClick={() => this.handleFilter('thinkdesign')} className={this.state.filter.includes('thinkdesign') ? 'active' : ''}/>
          <Button title={'Open Source'} symbol={'Api24'} onClick={() => this.handleFilter('opensource')} className={this.state.filter.includes('opensource') ? 'active' : ''}/>
          <Button title={'Accessibility'} symbol={'AccessibilityAlt24'} onClick={() => this.handleFilter('a11y')} className={this.state.filter.includes('a11y') ? 'active' : ''}/>
          <Button title={'The Web Of Tomorrow'} symbol={'Devices24'} onClick={() => this.handleFilter('tomorrow')} className={this.state.filter.includes('tomorrow') ? 'active' : ''}/>
        </FilterItem>
      </FilterWrapper>
    )
  } 
}

export default React.memo(Filtering);