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
      title: 'Ein Hotel führen, heute',
      body: [
        'Es ist 22 Uhr, und eigentlich wäre Feierabend. Aber das Postfach ist voll, im Dienstplan für morgen fehlt jemand, und in Zimmer 12 tropft Wasser. Wer ein Hotel führt, kennt diesen Abend. Die Kosten steigen, und gutes Personal ist kaum zu finden. Ich kenne diesen Abend auch. Ich bin in einem familiengeführten Hotel aufgewachsen und habe dort so gut wie jede Arbeit gemacht.',
      ],
    },
    {
      marker: '02',
      title: 'Design & Technologie als Rückgrat',
      body: [
        'Danach habe ich mehr als zehn Jahre lang digitale Produkte in Startups gebaut, vom ersten Prototyp bis zu Tools, auf die sich Menschen jeden Tag verlassen. Ich habe ein Unternehmen mitgegründet und an Open-Source-Software mitgearbeitet, die weltweit im Einsatz ist. Dabei ist mir immer wieder dasselbe aufgefallen: Gute Produkte entstehen wie gute Hotels, aus vielen kleinen Entscheidungen, die mit Sorgfalt getroffen werden.',
      ],
    },
    {
      marker: '03',
      title: 'Meine Mission: KI für die Hotellerie',
      body: [
        'Picobello bringt beide Welten zusammen. Wir bauen KI-Agenten für Hotels: Sie übernehmen die Arbeit, die sich jeden Tag wiederholt, von Gästeanfragen bis zu den Routinen im Betrieb. Damit um 22 Uhr wirklich Feierabend ist und die Zeit wieder den Gästen gehört. Sie finden uns auf ',
        { href: 'https://picobello.ai', label: 'picobello.ai' },
        '.',
      ],
    },
  ],
}

export default function PicobelloDe() {
  return <PicobelloPage content={content} />
}
