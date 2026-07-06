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
        'Es ist 22 Uhr, und eigentlich wäre Feierabend. Aber das Postfach ist voll, im Dienstplan für morgen fehlt jemand, und in Zimmer 12 tropft Wasser. Wer ein Hotel führt, kennt diesen Abend. Die Kosten steigen, gutes Personal ist kaum zu finden, und dazu die tausend Kleinigkeiten, die niemand bemerkt, solange sie funktionieren. Ich kenne diesen Abend nicht aus Erzählungen. Ich bin in ihm aufgewachsen, im Hotel meiner Familie, und habe dort so gut wie jede Arbeit selbst gemacht.',
      ],
    },
    {
      marker: '02',
      title: 'Design & Technologie als Rückgrat',
      body: [
        'Dann bin ich gegangen, um die andere Seite zu verstehen. Mehr als zehn Jahre habe ich digitale Produkte gebaut, vom ersten Prototyp bis zu Tools, auf die sich Menschen täglich verlassen. Ich habe ein Unternehmen mitgegründet und an Open-Source-Software mitgearbeitet, die weltweit läuft. Und je länger ich baute, desto klarer wurde mir: Ein gutes Produkt entsteht wie ein gutes Hotel, aus unzähligen kleinen Entscheidungen, jede mit Sorgfalt getroffen. Es sind dieselben zwei Welten. Nur begegnen sie sich fast nie in einem Menschen.',
      ],
    },
    {
      marker: '03',
      title: 'Meine Mission: KI für die Hotellerie',
      body: [
        'Genau dort setzt Picobello an. Wir bauen KI-Agenten für Hotels: Sie übernehmen, was sich jeden Tag wiederholt, von der Gästeanfrage bis zur Routine im Betrieb. Kein weiteres Tool, das noch mehr Aufmerksamkeit fordert, sondern eine stille Entlastung, die einfach funktioniert. Damit um 22 Uhr wirklich Feierabend ist. Und die Zeit wieder den Gästen gehört. Sie finden uns auf ',
        { href: 'https://picobello.ai', label: 'picobello.ai' },
        '.',
      ],
    },
  ],
}

export default function PicobelloDe() {
  return <PicobelloPage content={content} />
}
