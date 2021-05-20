import styled from 'styled-components'

const BadgeItem = styled.span`
  background-color: var(--colorTextDark);
  padding: 0 calc(var(--unit)*0.625);
  text-align: center;
  text-transform: uppercase;
  height: calc(var(--unit)*1.875);
  font-family: var(--fontSans);
  font-size: calc(var(--unit)*1.25);
  letter-spacing: 0.03rem;
  line-height: 145%;
  font-weight: 600;
  color: #1F1F1F;
  user-select: none;
`

export default function Badge({ text }) {
  return (
    <BadgeItem>{ text }</BadgeItem>
  )
}