import Zooming from 'zooming'

typeof window !== 'undefined' ? (
  document.addEventListener('DOMContentLoaded', function () {
    let  styling;
    const zooming = new Zooming({
      bgColor: getComputedStyle(document.body).getPropertyValue('--colorBg'),
      customSize: '150%',
      onOpen: (target) => {
        target.classList.add('opened')
      },
      onClose: (target) => {
        target.classList.remove('opened')
      }
    })
    zooming.listen('.img-zoomable')
  })
) : null