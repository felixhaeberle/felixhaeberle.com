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
        'Ich bin in einem kleinen Familienhotel groß geworden und habe dort über die Jahre so ziemlich jede Arbeit selbst gemacht, an der Rezeption, im Service und überall dort, wo sonst gerade Hände fehlten. Dabei habe ich früh ein Gespür dafür bekommen, wie viel im Hintergrund passieren muss, damit für den Gast am Ende alles ganz selbstverständlich aussieht. Leichter ist dieser Beruf über die Jahre nicht geworden. Die Kosten steigen, gutes Personal zu finden wird immer schwerer, und gleichzeitig erwarten Gäste zu jeder Tages- und Nachtzeit eine schnelle, persönliche Antwort. Ich kenne die Abende, an denen eigentlich längst Feierabend wäre und trotzdem noch das Postfach voll ist, im Dienstplan für den nächsten Tag jemand fehlt und nebenbei in einem der Zimmer etwas kaputtgeht.',
      ],
    },
    {
      marker: '02',
      title: 'Design & Technologie als Rückgrat',
      body: [
        'Irgendwann hat es mich in eine ganz andere Welt gezogen. Ich habe Design studiert und danach über zehn Jahre lang digitale Produkte entwickelt, vom ersten Entwurf bis zu Anwendungen, mit denen Menschen jeden Tag arbeiten. Ich habe ein eigenes Unternehmen mitgegründet und an Open-Source-Projekten mitgeschrieben, die heute weltweit genutzt werden. Je länger ich das gemacht habe, desto deutlicher habe ich gemerkt, wie ähnlich sich die beiden Seiten meines Lebens eigentlich sind. Ein gutes Produkt und ein gut geführtes Hotel entstehen auf die gleiche Weise, nämlich aus vielen kleinen Entscheidungen, die jemand mit Sorgfalt und einem Gespür für die Menschen trifft, die am Ende damit zu tun haben. Und ich habe festgestellt, dass man nur selten jemanden trifft, der beide Seiten wirklich von innen kennt.',
      ],
    },
    {
      marker: '03',
      title: 'Meine Mission: KI für die Hotellerie',
      body: [
        'Mit Picobello bringe ich diese beiden Seiten zusammen. Wir entwickeln KI-Agenten für Hotels, die den Teil der Arbeit übernehmen, der sich jeden Tag wiederholt, von wiederkehrenden Gästeanfragen bis zu den vielen kleinen Abläufen im Betrieb, die Zeit kosten, ohne dass sie groß auffallen. Mir ist dabei wichtig, dass es sich im Alltag nicht nach einem weiteren Programm anfühlt, um das man sich auch noch kümmern muss, sondern nach einer echten Entlastung, die im Hintergrund einfach mitläuft. Worum es mir am Ende geht, ist ganz einfach: dass in einem Hotel wieder mehr Zeit für das bleibt, was wirklich zählt, für die Gäste und für die Menschen, die sich um sie kümmern. Mehr darüber auf ',
        { href: 'https://picobello.ai', label: 'picobello.ai' },
        '.',
      ],
    },
  ],
}

export default function PicobelloDe() {
  return <PicobelloPage content={content} />
}
