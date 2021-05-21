import Badge from '../1_atoms/Badge'
import Text from '../1_atoms/Text'
import media from '../0_helpers/viewportValues'
import styled from 'styled-components'

const GalleryItem = styled.div`
  padding: calc(var(--unit)*5.75) var(--body-padding-y);
  background-color: var(--colorButtonBg);
  border: 1px solid rgba(var(--colorTextDarkRBG),0.2);

  ${media.lessThan('small')`
    padding: calc(var(--unit)*3.75) var(--body-padding-y);

    .videoCell {
      display: flex;
      flex-direction: column-reverse; 
    }
  `}
` 

GalleryItem.Headline = styled(Text.Mono.Dark)``

GalleryItem.Image = styled.img`
  margin-bottom: calc(var(--unit)*3);
  border: 1px solid rgba(var(--colorTextDarkRBG),0.2);
`

GalleryItem.VideoWrapper = styled.div`
  position: relative;
  margin-top: calc(var(--unit)*3);

  ${media.lessThan('small')`
    margin-top: 0;
    margin-bottom: calc(var(--unit)*3);
  `}
`

GalleryItem.BadgeWrapper = styled.div`
  position: absolute;
  bottom: calc(var(--unit)*2);
  left: calc(var(--unit)*2.5);
`

GalleryItem.Video = styled.video`
  width: 100%;
  height: auto;
  border: 1px solid rgba(var(--colorTextDarkRBG),0.2);
`

GalleryItem.Text = styled(Text.Small.Dark)`
  max-width: calc(var(--unit)*50);

  ${media.lessThan('small')`
    max-width: auto;
  `}
`


export default function Gallery() {

  return (
    <GalleryItem>
      <GalleryItem.Headline>Fun Facts</GalleryItem.Headline>
      <r-grid columns="12" columns-s="4">
        <r-cell span="5" span-s="4" class="imageCell">
          <GalleryItem.Image src="images/fun-facts/firefighter.jpg"/>
          <GalleryItem.Text>I’m a firefighter! Since I am attending university, I am currently taking a break from it – but I’m soon at it again. </GalleryItem.Text>
        </r-cell>
        <r-cell span="6" span-s="4" class="videoCell">
          <GalleryItem.Text>I’ve done flatland unicycling. During my active time (2008 - 2015) I participated at championships all over Europe. I’m very proud of this achievement.</GalleryItem.Text>
          <GalleryItem.VideoWrapper>
            <GalleryItem.BadgeWrapper>
              <Badge text={'Hover'}/>
            </GalleryItem.BadgeWrapper>
            <GalleryItem.Video 
              onMouseOver={event => event.target.play()}
              onMouseOut={event => event.target.pause()}
              muted loop playsinline 
              preload="none" poster="images/fun-facts/poster.jpg">
              <source src="images/fun-facts/movie-small.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </GalleryItem.Video>
          </GalleryItem.VideoWrapper>
        </r-cell>
      </r-grid>
    </GalleryItem>
  )
}