import React from 'react'

import UltrahostPage from '../../components/4_templates/UltrahostPage.jsx'

const content = {
  title: 'Felix Häberle — Ultrahost',
  metaDescription:
    'Ultrahost is the missing AI layer for hospitality. It takes over the repetitive work behind hotel operations and guest communication.',
  sublineLine1: 'Founder of Ultrahost.',
  sublineLine2: 'AI agents for hospitality.',
  imprintLabel: 'Imprint',
  chapters: [
    {
      marker: '01',
      title: 'Running a hotel today',
      body: [
        'It’s 10 pm and the day should be over. But the inbox is full, tomorrow’s shift plan has a hole in it, and water is leaking in room 12. Anyone who runs a hotel knows this evening. Costs keep rising, and good people are hard to find. I know this evening too. I grew up in a family-run hotel and did just about every job in the house.',
      ],
    },
    {
      marker: '02',
      title: 'Design & technology as a backbone',
      body: [
        'Later I spent more than ten years building digital products in startups, from first prototypes to tools people rely on every day. I co-founded a company and helped build open source software used around the world. And I kept noticing the same thing: good products and good hotels are built alike, out of many small decisions made with care.',
      ],
    },
    {
      marker: '03',
      title: 'On a mission to solve AI for hospitality',
      body: [
        'Ultrahost brings the two together. It’s the missing AI layer for hospitality: it takes over the repetitive work behind hotel operations and guest communication, so the day ends when it should and the time goes back to the guests. You can find us at ',
        { href: 'https://ultrahost.ai', label: 'ultrahost.ai' },
        '.',
      ],
    },
  ],
}

export default function Ultrahost() {
  return <UltrahostPage content={content} />
}
