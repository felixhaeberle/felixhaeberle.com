import styled, { css } from 'styled-components'

import React from 'react'
import Text from './Text'
import dynamic from 'next/dynamic'

export const ButtonItemText = styled(Text)`
  color: var(--colorTextDark);
`

export const ButtonItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--colorButtonBg);
  padding: calc(var(--unit)*2.25) calc(var(--unit)*2.5);
  margin-bottom: calc(var(--unit)* 4.5);
  width: 300px;

  &:hover {
    cursor: pointer;

    .button-icon {
      animation: ${props => ((props.symbol === 'Voicemail24') ? 'wiggle 500ms 1 ease-in-out' : 'none')};
    }
  }

  &.active {
    background-color: var(--colorTextDark);
    
    ${ButtonItemText} {
      color: var(--colorButtonBg);
    }

    .button-icon {
      fill: var(--colorButtonBg);
    }
  }
`

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return (this.props.className !== nextProps.className);
  }
  
  render(){
    let ButtonItemSymbol = dynamic(() => import('@carbon/icons-react').then((mod) => mod[this.props.symbol]))

    return (
      <ButtonItem onClick={this.props.onClick} className={this.props.className}>
        <ButtonItemText>{this.props.title}</ButtonItemText>
        <ButtonItemSymbol className="button-icon"></ButtonItemSymbol>
      </ButtonItem>
    )
  }
}

export default React.memo(Button);