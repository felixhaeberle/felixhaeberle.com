import ActiveLink from '../1_atoms/ActiveLink'
import Text from '../1_atoms/Text'
import media from '../0_helpers/viewportValues'
import styled from 'styled-components'

const NavigationShell = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  ${Text}:hover{
    cursor: pointer;
  }
`

const NavigationWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;

  ${media.lessThan('medium')`
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: calc(var(--unit)*3);

    &:last-child {
      margin-bottom: 0;
    }
  `}
`

const NavigationItem = styled.li`
  margin-left: calc(var(--unit) *8);

  &:hover{
    cursor: pointer;
  }

  ${media.lessThan('medium')`
    margin-left: unset;
    padding: calc(var(--unit)*1) 0;

    &:first-child {
      margin-top: calc(var(--unit)*-1);
    }

    &:last-child {
      margin-bottom: calc(var(--unit)*-1);
    }
  `}
`

export default function Navigation({ navigationItems, title }) {
  return (
    <NavigationShell>
      <div>
        <ActiveLink href="/" passHref>
          <a>
            <Text>{title}</Text>
          </a>
        </ActiveLink>
      </div>
      <nav>
        <NavigationWrapper>
        {navigationItems.map(({ url, title }) => (
          <NavigationItem key={title}>
            <ActiveLink href={`${url}`} passHref>
              <a>
                <Text>{title}</Text>
              </a>
            </ActiveLink>
          </NavigationItem>
          ))}
        </NavigationWrapper>
      </nav>
    </NavigationShell>
  )
}