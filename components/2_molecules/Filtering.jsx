import React from 'react'
import Button from '../1_atoms/Button.tsx'
import CardWritings from './CardWritings.jsx'

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
        const writingCategories = (writing.categories || []).map((category) => category.handle)
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
          <p className="font-mono text-lg text-text font-medium tracking-custom uppercase mb-unit-4.5 text-textDark">Filter by category</p>
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
        <div className="
          mt-[calc(var(--unit)*7.5)]
          flex flex-wrap
          gap-6 md:gap-8 lg:gap-12
        ">
          {writings.map((writing, index) => (
            <div key={index} className="w-full sm:flex-[0_0_calc(50%-1.5rem)] lg:flex-[0_0_calc(33.333%-2rem)]">
              <CardWritings
                image={writing.image}
                imageAlt={writing.imageAlt}
                title={writing.title}
                text={writing.teaserSmall || writing.teaser}
                link={writing.externalLink || '/writings/' + writing.slug}
                isExternal={Boolean(writing.externalLink)}
                date={writing.publishedAt}
                itemNumber={index}
              />
            </div>
          ))}
        </div>
      </div>
    )
  } 
}

export default React.memo(Filtering);