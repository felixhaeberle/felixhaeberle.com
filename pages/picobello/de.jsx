import React from 'react'

import PicobelloPage from '../../components/4_templates/PicobelloPage.jsx'

const content = {
  title: 'Felix Häberle — Picobello',
  metaDescription:
    'Picobello ist die fehlende KI-Ebene für die Hotellerie. Sie übernimmt die immer gleichen Aufgaben hinter Hotelbetrieb und Gästekommunikation.',
  sublineLine1: 'Gründer von Picobello.',
  sublineLine2: 'KI-Agenten für die Hotellerie.',
  imprintLabel: 'Impressum',
  chapters: [
    {
      marker: '01',
      title: 'Erfahrungswerte',
      body: [
        'Ich bin in einem Hotel groß geworden und habe dort über die Jahre so ziemlich jede Arbeit mal selbst gemacht. Dabei habe ich früh gesehen, wie viel im Hintergrund passieren muss, damit für den Gast am Ende alles selbstverständlich wirkt. Und ich weiß, dass dieser Beruf nicht leichter geworden ist, mit steigenden Kosten, fehlendem Personal und Gästen, die rund um die Uhr eine schnelle, persönliche Antwort und guten Service erwarten.',
      ],
    },
    {
      marker: '02',
      title: 'Über den Tellerrand schauen',
      body: [
        'Danach habe ich über zehn Jahre lang digitale Produkte entwickelt, ein Unternehmen mitgegründet und an Open-Source-Software mitgearbeitet, die weltweit genutzt wird. So kenne ich heute beide Welten, die Hotellerie und die Technologie, und weiß, wie selten jemand in beiden zu Hause ist.',
      ],
    },
    {
      marker: '03',
      title: 'Meine Mission: KI für die Hotellerie',
      body: [
        'Mit Picobello bringe ich beide Seiten zusammen. Wir entwickeln KI-Agenten für Hotels, die die immer gleichen Aufgaben im Hintergrund übernehmen, von wiederkehrenden Gästeanfragen bis zu den kleinen Abläufen im Betrieb. So bleibt wieder mehr Zeit für das, was wirklich zählt: die Gäste. Mehr darüber auf ',
        { href: 'https://picobello.ai', label: 'picobello.ai' },
        '.',
      ],
    },
  ],
}

export default function PicobelloDe() {
  return <PicobelloPage content={content} />
}
