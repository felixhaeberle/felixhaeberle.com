import React from 'react'
import Button from '../1_atoms/Button.tsx'
import CardWritings from './CardWritings.jsx'
import Text from '../1_atoms/Text.jsx'

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
    
    // Filter writings based on user selection
    let writings;
    if(this.state.filter.length === 0){
      writings = this.props.writings;
    } else {
      writings = this.props.writings.filter((writing) => {  
        const writingCategories = writing.categories.map((category) => category.handle)
        if (writingCategories.some(r=> this.state.filter.includes(r))){
          return writing
        }
      })
    }

    // Sort writings based on publish date
    writings = writings.sort((a,b) => {
      return new Date(b.publishedAt) - new Date(a.publishedAt);
    });

    return (
      <div>
        {/* Filtering */}
        <div className="block mt-[calc(var(--unit)*12.5)]"> 
          <Text.Mono.Dark>Filter by category</Text.Mono.Dark>
          <div className="flex flex-wrap max-w-[90%]">
            {this.props.categories.map((category, index) => (
              <div key={index} className="mr-[calc(var(--unit)*2.5)] mb-[calc(var(--unit)*2.5)]">
                <Button 
                  title={category.title} 
                  symbol={category.symbol} 
                  onClick={() => this.handleFilter(category.handle)} 
                  className={this.state.filter.includes(category.handle) ? 'active' : ''}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Writing List */}
        <r-grid columns="6" columns-s="2" columns-xs="1" className="mt-[calc(var(--unit)*7.5)]">
          {writings.map((writing, index) => (
            <CardWritings
              image={{source: writing.image, alt: writing.imageAlt }} 
              title={writing.title}
              link={'/writings/' + writing.slug}
              shortText={writing.teaserSmall}
              longText={writing.teaser}
              date={writing.publishedAt}
              key={index}
              itemNumber={index}
            />
          ))}
        </r-grid>
      </div>
    )
  } 
}

export default React.memo(Filtering);