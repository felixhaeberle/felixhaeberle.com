import Text from './Text'
import styled from 'styled-components'

export default {
  title: 'Atoms/Text',
  component: Text
}

export const TextDefault = () => <Text>Text</Text>
export const TextDark = () => <Text.Dark>Text Dark</Text.Dark>
export const TextLarge = () => <Text.Large>Text Large</Text.Large>
export const TextMedium = () => <Text.Medium>Text Medium</Text.Medium>
export const TextMediumDark = () => <Text.Medium.Dark>Text Medium Dark</Text.Medium.Dark>
export const TextSmall = () => <Text.Small>Text Small</Text.Small>
export const TextSmallDark = () => <Text.Small.Dark>Text Small Dark</Text.Small.Dark>
export const TextMono = () => <Text.Mono>Text Small Dark</Text.Mono>
export const TextMonoDark = () => <Text.Mono.Dark>Text Small Dark</Text.Mono.Dark>