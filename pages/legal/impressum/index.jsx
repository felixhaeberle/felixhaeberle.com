import Head from 'next/head'
import Layout from '../../../components/4_templates/Layout.jsx'
import { getSiteSettings } from '../../../lib/query/settings'

export default function SiteNotice({ settings }) {

  return (
    <Layout settings={settings} pageTitle={'Site Notice / Impressum'}>
      <Head>
        <title>Site Notice / Impressum</title>
      </Head>
      <main className="[&_p]:my-[calc(var(--unit)*2)] [&_.text-small-dark]:mb-unit">
        <div className="flex flex-col max-w-[52rem] space-y-unit-2">
          <h1 className="font-sans text-xl text-textLight font-medium mb-unit-1">Site Notice / Impressum</h1>
          <p className="font-mono text-lg text-text font-medium tracking-custom uppercase mb-unit-4.5 text-textDark">Datenschutzerklärung</p>
            <p className="font-sans text-base text-text font-medium">Allgemeiner Hinweis und Pflichtinformationen</p>
            <p className="font-sans text-base text-text font-medium">Benennung der verantwortlichen Stelle</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">
            Felix Häberle<br/>
            Liesenstraße 3<br/>
            10115 Berlin
            </p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).</p>

            <p className="font-sans text-base text-text font-medium">Widerruf Ihrer Einwilligung zur Datenverarbeitung</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>

            <p className="font-sans text-base text-text font-medium">Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" className="text-textDarker transition-opacity duration-220 break-words hover:opacity-90">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.</p>

            <p className="font-sans text-base text-text font-medium">Recht auf Datenübertragbarkeit</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>

            <p className="font-sans text-base text-text font-medium">Recht auf Auskunft, Berichtigung, Sperrung, Löschung</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.</p>

            <p className="font-sans text-base text-text font-medium">SSL- bzw. TLS-Verschlüsselung</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.</p>

            <p className="font-sans text-base text-text font-medium">Server-Log-Dateien</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch Informationen, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
            <ul className="m-0 mb-unit list-none">
                <li><p className="font-sans text-sm text-text leading-small-text font-medium text-textDark indent-0 mb-0 before:content-['-'] before:pr-[5px]">Besuchte Seite auf unserer Domain</p></li>
                <li><p className="font-sans text-sm text-text leading-small-text font-medium text-textDark indent-0 mb-0 before:content-['-'] before:pr-[5px]">Datum und Uhrzeit der Serveranfrage</p></li>
                <li><p className="font-sans text-sm text-text leading-small-text font-medium text-textDark indent-0 mb-0 before:content-['-'] before:pr-[5px]">Browsertyp und Browserversion</p></li>
                <li><p className="font-sans text-sm text-text leading-small-text font-medium text-textDark indent-0 mb-0 before:content-['-'] before:pr-[5px]">Verwendetes Betriebssystem</p></li>
                <li><p className="font-sans text-sm text-text leading-small-text font-medium text-textDark indent-0 mb-0 before:content-['-'] before:pr-[5px]">Referrer URL</p></li>
                <li><p className="font-sans text-sm text-text leading-small-text font-medium text-textDark indent-0 mb-0 before:content-['-'] before:pr-[5px]">Hostname des zugreifenden Rechners</p></li>
                <li><p className="font-sans text-sm text-text leading-small-text font-medium text-textDark indent-0 mb-0 before:content-['-'] before:pr-[5px]">IP-Adresse</p></li>
            </ul>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.</p>
                        
            <p className="font-sans text-base text-text font-medium">YouTube</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Für Integration und Darstellung von Videoinhalten nutzt unsere Website Plugins von YouTube. Anbieter des Videoportals ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Bei Aufruf einer Seite mit integriertem YouTube-Plugin wird eine Verbindung zu den Servern von YouTube hergestellt. YouTube erfährt hierdurch, welche unserer Seiten Sie aufgerufen haben.</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">YouTube kann Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen, sollten Sie in Ihrem YouTube Konto eingeloggt sein. Durch vorheriges Ausloggen haben Sie die Möglichkeit, dies zu unterbinden.</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Einzelheiten zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube unter: <a href="https://www.google.de/intl/de/policies/privacy" className="text-textDarker transition-opacity duration-220 break-words hover:opacity-90">https://www.google.de/intl/de/policies/privacy</a>.</p>
                        
            <p className="font-sans text-base text-text font-medium">Vimeo</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Für Integration und Darstellung von Videoinhalten nutzt unsere Website Plugins von Vimeo. Anbieter des Videoportals ist die Vimeo Inc., 555 West 18th Street, New York, New York 10011, USA.</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Bei Aufruf einer Seite mit integriertem Vimeo-Plugin wird eine Verbindung zu den Servern von Vimeo hergestellt. Vimeo erfährt hierdurch, welche unserer Seiten Sie aufgerufen haben. Vimeo erfährt Ihre IP-Adresse, selbst wenn Sie nicht beim Videoportal
              eingeloggt sind oder dort kein Konto besitzen. Es erfolgt eine Übermittlung der von Vimeo erfassten Informationen an Server des Videoportals in den USA.</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Vimeo kann Ihr Surfverhalten direkt Ihrem persönlichen Profil zuordnen. Durch vorheriges Ausloggen haben Sie die Möglichkeit, dies zu unterbinden.</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Einzelheiten zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Vimeo unter: <a href="https://vimeo.com/privacy" className="text-textDarker transition-opacity duration-220 break-words hover:opacity-90">https://vimeo.com/privacy</a>.</p>
                        
            <p className="font-sans text-base text-text font-medium">Cookies</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. </p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf
              unserer Website wiederzuerkennen.</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken oder unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem Schließen des Programms von selbst gelöscht werden. Die Deaktivierung von Cookies
              kann eine eingeschränkte Funktionalität unserer Website zur Folge haben.</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Das Setzen von Cookies, die zur Ausübung elektronischer Kommunikationsvorgänge oder der Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser
              Website haben wir ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und reibungslosen Bereitstellung unserer Dienste. Sofern die Setzung anderer Cookies (z.B. für Analyse-Funktionen) erfolgt, werden diese in dieser
              Datenschutzerklärung separat behandelt.</p>
                        
            <p className="font-sans text-base text-text font-medium">Matomo (ehemals Piwik)</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Unsere Website verwendet den Webanalysedienst Matomo. Matomo ist eine Open Source Lösung.</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Matomo verwendet "Cookies." Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert und die eine Analyse der Website-Benutzung ermöglichen. Mittels Cookie erzeugte Informationen über die Benutzung unserer Website werden
              auf unserem Server gespeichert. Vor der Speicherung erfolgt eine Anonymisierung Ihrer IP-Adresse.</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Cookies von Matomo verbleiben auf Ihrem Endgerät, bis Sie eine Löschung vornehmen.</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Das Setzen von Matomo-Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der anonymisierten Analyse des Nutzerverhaltens, um sowohl unser Webangebot und ggf. auch Werbung
              zu optimieren.</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Es erfolgt keine Weitergabe der im Matomo-Cookie gespeicherten Informationen über die Benutzung dieser Website. Das Setzen von Cookies durch Ihren Webbrowser ist verhinderbar. Einige Funktionen unserer Website könnten dadurch jedoch eingeschränkt werden. </p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Sie können hier die Speicherung und Nutzung Ihrer Daten deaktivieren. Ihr Browser setzt ein Opt-Out-Cookie, welches die Speicherung von Matomo Nutzungsdaten unterbindet. Wenn Sie Ihre Cookies löschen, wird auch das Matomo Opt-Out-Cookie entfernt. Bei
              einem erneuten Besuch unserer Website ist das Opt-Out-Cookie zur Unterbindung der Speicherung und Nutzung Ihrer Daten erneut zu setzen.</p>
                        
            <p className="font-sans text-base text-text font-medium">Twitter Plugin</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Unsere Website vewendet Funktionen des Dienstes Twitter. Anbieter ist die Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA. </p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Bei Nutzung von Twitter und der Funktion "Re-Tweet" werden von Ihnen besuchte Websites mit Ihrem Twitter-Account verknüpft und in Ihrem Twitter-Feed veröffentlicht. Dabei erfolgt eine Übermittlung von Daten an Twitter. Über den Inhalt der übermittelten
              Daten sowie die Nutzung dieser Daten durch Twitter haben wir keine Kenntnis. Einzelheiten finden Sie in der Datenschutzerklärung von Twitter: <a href="https://twitter.com/privacy" className="text-textDarker transition-opacity duration-220 break-words hover:opacity-90">https://twitter.com/privacy</a>.</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Sie können Ihre Datenschutzeinstellungen bei Twitter ändern: <a href="https://twitter.com/account/settings" className="text-textDarker transition-opacity duration-220 break-words hover:opacity-90">https://twitter.com/account/settings</a></p>
                        
            <p className="font-sans text-base text-text font-medium">Google Web Fonts</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Unsere Website verwendet Web Fonts von Google. Anbieter ist die Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Durch den Einsatz dieser Web Fonts wird es möglich Ihnen die von uns gewünschte Darstellung unserer Website zu präsentieren, unabhängig davon welche Schriften Ihnen lokal zur Verfügung stehen. Dies erfolgt über den Abruf der Google Web Fonts von einem Server von Google in den USA und der damit verbundenen Weitergabe Ihre Daten an Google. Dabei handelt es sich um Ihre IP-Adresse und welche Seite Sie bei uns besucht haben. Der Einsatz von Google Web Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der optimalen Darstellung und Übertragung unseres Webauftritts.</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Das Unternehmen Google ist für das us-europäische Datenschutzübereinkommen "Privacy Shield" zertifiziert. Dieses Datenschutzübereinkommen soll die Einhaltung des in der EU geltenden Datenschutzniveaus gewährleisten.</p>
            <p className="font-sans text-sm text-text leading-small-text font-medium text-textDark">Einzelheiten über Google Web Fonts finden Sie unter: <a href="https://www.google.com/fonts#AboutPlace:about" className="text-textDarker transition-opacity duration-220 break-words hover:opacity-90">https://www.google.com/fonts#AboutPlace:about</a> und weitere Informationen in den Datenschutzbestimmungen von Google: <a href="https://policies.google.com/privacy/partners?hl=de" className="text-textDarker transition-opacity duration-220 break-words hover:opacity-90">https://policies.google.com/privacy/partners?hl=de</a></p>
        </div>
      </main>
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