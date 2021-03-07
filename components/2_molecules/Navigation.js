import Link from '../1_atoms/Link'
import { useRouter } from 'next/router'
import Text from '../1_atoms/Text'
import styled from 'styled-components'
import { site } from '../../pages/_app'

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
`

const NavigationItem = styled.li`
  margin-left: calc(var(--unit) *8);

  &:hover{
    cursor: pointer;
  }
`

export default function Navigation({ navigationItems, title }) {
  const router = useRouter();

  return (
    <NavigationShell>
      <Link href="/" passHref>
        <a>
          <Text>{title}</Text>
        </a>
      </Link>
      <nav>
        <NavigationWrapper>
        {navigationItems.map(({ url, title }) => (
          <NavigationItem key={title}>
            <Link href={`${url}`} passHref>
              <a>
                <Text>{title}</Text>
              </a>
            </Link>
          </NavigationItem>
          ))}
        </NavigationWrapper>
      </nav>
    </NavigationShell>
  )
}