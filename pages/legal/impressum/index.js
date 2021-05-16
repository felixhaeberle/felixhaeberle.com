import Head from 'next/head'
import Layout from '../../../components/4_templates/Layout'
import Text from '../../../components/1_atoms/Text'
import { getSiteSettings } from '../../../lib/query/settings'
import styled from 'styled-components'

const List = styled.ul``
const Anchor = styled.a``

const Main = styled.main`
  ${Text} {
    margin: calc(var(--unit)*2) 0;
  }

  ${Text.Small.Dark} {
    margin-bottom: calc(var(--unit)*1);
  }

  ${List} {
    margin: 0;
    margin-bottom: calc(var(--unit)*1);
    list-style-type: none;
    
    ${Text.Small.Dark} {
      text-indent: 0;
      margin-bottom: 0;
      
      &:before {
        content: "–";
        padding-inline-end: 5px;
      }
    }  
  }

  ${Anchor} {
    color: var(--colorTextDarker);
    transition: opacity 220ms ease-out;
    word-wrap: break-word;
    
    &:hover {
      opacity: 0.9;
    }
  }
`

export default function SiteNotice({ settings }) {

  return (
    <Layout settings={settings} pageTitle={'Site Notice / Impressum'}>
      <Head>
        <title>About</title>
      </Head>
      <Main>
        <r-grid columns="6">
          <r-cell span="3" span-m="4" span-s="6">
            <Text.Mono.Dark>Datenschutzerklärung</Text.Mono.Dark>
            <Text>Allgemeiner Hinweis und Pflichtinformationen</Text>
            <Text>Benennung der verantwortlichen Stelle</Text>
            <Text.Small.Dark>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</Text.Small.Dark>
            <Text.Small.Dark>
            Felix Häberle<br/>
            Nepperbergstraße 8<br/>
            73525 Schwäbisch Gmünd
            </Text.Small.Dark>
            <Text.Small.Dark>Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).</Text.Small.Dark>

            <Text>Widerruf Ihrer Einwilligung zur Datenverarbeitung</Text>
            <Text.Small.Dark>Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</Text.Small.Dark>

            <Text>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</Text>
            <Text.Small.Dark>Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: <Anchor href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</Anchor>.</Text.Small.Dark>

            <Text>Recht auf Datenübertragbarkeit</Text>
            <Text.Small.Dark>Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</Text.Small.Dark>

            <Text>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</Text>
            <Text.Small.Dark>Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.</Text.Small.Dark>

            <Text>SSL- bzw. TLS-Verschlüsselung</Text>
            <Text.Small.Dark>Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.</Text.Small.Dark>

            <Text>Server-Log-Dateien</Text>
            <Text.Small.Dark>In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch Informationen, die Ihr Browser automatisch an uns übermittelt. Dies sind:</Text.Small.Dark>
            <List>
                <li><Text.Small.Dark>Besuchte Seite auf unserer Domain</Text.Small.Dark></li>
                <li><Text.Small.Dark>Datum und Uhrzeit der Serveranfrage</Text.Small.Dark></li>
                <li><Text.Small.Dark>Browsertyp und Browserversion</Text.Small.Dark></li>
                <li><Text.Small.Dark>Verwendetes Betriebssystem</Text.Small.Dark></li>
                <li><Text.Small.Dark>Referrer URL</Text.Small.Dark></li>
                <li><Text.Small.Dark>Hostname des zugreifenden Rechners</Text.Small.Dark></li>
                <li><Text.Small.Dark>IP-Adresse</Text.Small.Dark></li>
            </List>
            <Text.Small.Dark>Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.</Text.Small.Dark>
                        
            <Text>YouTube</Text>
            <Text.Small.Dark>Für Integration und Darstellung von Videoinhalten nutzt unsere Website Plugins von YouTube. Anbieter des Videoportals ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.</Text.Small.Dark>
            <Text.Small.Dark>Bei Aufruf einer Seite mit integriertem YouTube-Plugin wird eine Verbindung zu den Servern von YouTube hergestellt. YouTube erfährt hierdurch, welche unserer Seiten Sie aufgerufen haben.</Text.Small.Dark>
            <Text.Small.Dark>YouTube kann Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen, sollten Sie in Ihrem YouTube Konto eingeloggt sein. Durch vorheriges Ausloggen haben Sie die Möglichkeit, dies zu unterbinden.</Text.Small.Dark>
            <Text.Small.Dark>Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.</Text.Small.Dark>
            <Text.Small.Dark>Einzelheiten zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube unter: <Anchor href="https://www.google.de/intl/de/policies/privacy">https://www.google.de/intl/de/policies/privacy</Anchor>.</Text.Small.Dark>
                        
            <Text>Vimeo</Text>
            <Text.Small.Dark>Für Integration und Darstellung von Videoinhalten nutzt unsere Website Plugins von Vimeo. Anbieter des Videoportals ist die Vimeo Inc., 555 West 18th Street, New York, New York 10011, USA.</Text.Small.Dark>
            <Text.Small.Dark>Bei Aufruf einer Seite mit integriertem Vimeo-Plugin wird eine Verbindung zu den Servern von Vimeo hergestellt. Vimeo erfährt hierdurch, welche unserer Seiten Sie aufgerufen haben. Vimeo erfährt Ihre IP-Adresse, selbst wenn Sie nicht beim Videoportal
              eingeloggt sind oder dort kein Konto besitzen. Es erfolgt eine Übermittlung der von Vimeo erfassten Informationen an Server des Videoportals in den USA.</Text.Small.Dark>
            <Text.Small.Dark>Vimeo kann Ihr Surfverhalten direkt Ihrem persönlichen Profil zuordnen. Durch vorheriges Ausloggen haben Sie die Möglichkeit, dies zu unterbinden.</Text.Small.Dark>
            <Text.Small.Dark>Einzelheiten zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Vimeo unter: <Anchor href="https://vimeo.com/privacy">https://vimeo.com/privacy</Anchor>.</Text.Small.Dark>
                        
            <Text>Cookies</Text>
            <Text.Small.Dark>Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. </Text.Small.Dark>
            <Text.Small.Dark>Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf
              unserer Website wiederzuerkennen.</Text.Small.Dark>
            <Text.Small.Dark>Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken oder unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem Schließen des Programms von selbst gelöscht werden. Die Deaktivierung von Cookies
              kann eine eingeschränkte Funktionalität unserer Website zur Folge haben.</Text.Small.Dark>
            <Text.Small.Dark>Das Setzen von Cookies, die zur Ausübung elektronischer Kommunikationsvorgänge oder der Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser
              Website haben wir ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und reibungslosen Bereitstellung unserer Dienste. Sofern die Setzung anderer Cookies (z.B. für Analyse-Funktionen) erfolgt, werden diese in dieser
              Datenschutzerklärung separat behandelt.</Text.Small.Dark>
                        
            <Text>Matomo (ehemals Piwik)</Text>
            <Text.Small.Dark>Unsere Website verwendet den Webanalysedienst Matomo. Matomo ist eine Open Source Lösung.</Text.Small.Dark>
            <Text.Small.Dark>Matomo verwendet "Cookies." Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert und die eine Analyse der Website-Benutzung ermöglichen. Mittels Cookie erzeugte Informationen über die Benutzung unserer Website werden
              auf unserem Server gespeichert. Vor der Speicherung erfolgt eine Anonymisierung Ihrer IP-Adresse.</Text.Small.Dark>
            <Text.Small.Dark>Cookies von Matomo verbleiben auf Ihrem Endgerät, bis Sie eine Löschung vornehmen.</Text.Small.Dark>
            <Text.Small.Dark>Das Setzen von Matomo-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der anonymisierten Analyse des Nutzerverhaltens, um sowohl unser Webangebot und ggf. auch Werbung
              zu optimieren.</Text.Small.Dark>
            <Text.Small.Dark>Es erfolgt keine Weitergabe der im Matomo-Cookie gespeicherten Informationen über die Benutzung dieser Website. Das Setzen von Cookies durch Ihren Webbrowser ist verhinderbar. Einige Funktionen unserer Website könnten dadurch jedoch eingeschränkt werden. </Text.Small.Dark>
            <Text.Small.Dark>Sie können hier die Speicherung und Nutzung Ihrer Daten deaktivieren. Ihr Browser setzt ein Opt-Out-Cookie, welches die Speicherung von Matomo Nutzungsdaten unterbindet. Wenn Sie Ihre Cookies löschen, wird auch das Matomo Opt-Out-Cookie entfernt. Bei
              einem erneuten Besuch unserer Website ist das Opt-Out-Cookie zur Unterbindung der Speicherung und Nutzung Ihrer Daten erneut zu setzen.</Text.Small.Dark>
                        
            <Text>Twitter Plugin</Text>
            <Text.Small.Dark>Unsere Website vewendet Funktionen des Dienstes Twitter. Anbieter ist die Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA. </Text.Small.Dark>
            <Text.Small.Dark>Bei Nutzung von Twitter und der Funktion "Re-Tweet" werden von Ihnen besuchte Websites mit Ihrem Twitter-Account verknüpft und in Ihrem Twitter-Feed veröffentlicht. Dabei erfolgt eine Übermittlung von Daten an Twitter. Über den Inhalt der übermittelten
              Daten sowie die Nutzung dieser Daten durch Twitter haben wir keine Kenntnis. Einzelheiten finden Sie in der Datenschutzerklärung von Twitter: <Anchor href="https://twitter.com/privacy">https://twitter.com/privacy</Anchor>.</Text.Small.Dark>
            <Text.Small.Dark>Sie können Ihre Datenschutzeinstellungen bei Twitter ändern: <Anchor href="https://twitter.com/account/settings">https://twitter.com/account/settings</Anchor></Text.Small.Dark>
                        
            <Text>Google Web Fonts</Text>
            <Text.Small.Dark>Unsere Website verwendet Web Fonts von Google. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</Text.Small.Dark>
            <Text.Small.Dark>Durch den Einsatz dieser Web Fonts wird es möglich Ihnen die von uns gewünschte Darstellung unserer Website zu präsentieren, unabhängig davon welche Schriften Ihnen lokal zur Verfügung stehen. Dies erfolgt über den Abruf der Google Web Fonts von einem Server von Google in den USA und der damit verbundenen Weitergabe Ihre Daten an Google. Dabei handelt es sich um Ihre IP-Adresse und welche Seite Sie bei uns besucht haben. Der Einsatz von Google Web Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der optimalen Darstellung und Übertragung unseres Webauftritts.</Text.Small.Dark>
            <Text.Small.Dark>Das Unternehmen Google ist für das us-europäische Datenschutzübereinkommen "Privacy Shield" zertifiziert. Dieses Datenschutzübereinkommen soll die Einhaltung des in der EU geltenden Datenschutzniveaus gewährleisten.</Text.Small.Dark>
            <Text.Small.Dark>Einzelheiten über Google Web Fonts finden Sie unter: <Anchor href="https://www.google.com/fonts#AboutPlace:about">https://www.google.com/fonts#AboutPlace:about</Anchor> und weitere Informationen in den Datenschutzbestimmungen von Google: <Anchor href="https://policies.google.com/privacy/partners?hl=de">https://policies.google.com/privacy/partners?hl=de</Anchor></Text.Small.Dark>
          </r-cell>
        </r-grid>
      </Main>
    </Layout>
  )
}

export async function getStaticProps() {
  const siteSettings = await getSiteSettings();
  
  return {
    props: {
      settings: siteSettings
    }
  }
}