import styled from 'styled-components'
import Text from '../1_atoms/Text'

const HeaderTextItem = styled(Text)`
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: calc(var(--unit) * 1.5);
`

export default function HeaderText(){
  return (
    <r-grid columns="6" columns-s="4" columns-xs="1">
      <r-cell span="row" flow-cols="3" flow-cols-s="2" flow-cols-xs="1">
        <HeaderTextItem>My career as a designer started in the 1990s with an online magazine I created with a few friends. I started helping others with design and websites to learn more. It eventually led me to my first job as a designer, at Lear Corporation in 1999.</HeaderTextItem>
        <HeaderTextItem>My career as a designer started in the 1990s with an online magazine I created with a few friends. I started helping others with design and websites to learn more. It eventually led me to my first job as a designer, at Lear Corporation in 1999.</HeaderTextItem>
        <HeaderTextItem>My career as a designer started in the 1990s with an online magazine I created with a few friends. I started helping others with design and websites to learn more. It eventually led me to my first job as a designer, at Lear Corporation in 1999.</HeaderTextItem>
        <HeaderTextItem>My career as a designer started in the 1990s with an online magazine I created with a few friends. I started helping others with design and websites to learn more. It eventually led me to my first job as a designer, at Lear Corporation in 1999.</HeaderTextItem>
        <HeaderTextItem>My career as a designer started in the 1990s with an online magazine I created with a few friends. I started helping others with design and websites to learn more. It eventually led me to my first job as a designer, at Lear Corporation in 1999.</HeaderTextItem>
        <HeaderTextItem>My career as a designer started in the 1990s with an online magazine I created with a few friends. I started helping others with design and websites to learn more. It eventually led me to my first job as a designer, at Lear Corporation in 1999.</HeaderTextItem>
        </r-cell>
    </r-grid>
  )
}