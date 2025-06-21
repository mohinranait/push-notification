export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>

        <div className="prose max-w-none">
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
            identifiziert werden können.
          </p>

          <h2>2. Push-Benachrichtigungen</h2>
          <h3>OneSignal</h3>
          <p>
            Diese Website nutzt OneSignal für Push-Benachrichtigungen. OneSignal ist ein Service der OneSignal Inc.,
            2850 S Delaware St Suite 201, San Mateo, CA 94403, USA.
          </p>
          <p>Wenn Sie sich für Push-Benachrichtigungen anmelden, werden folgende Daten verarbeitet:</p>
          <ul>
            <li>Browser-Informationen</li>
            <li>Betriebssystem</li>
            <li>Zeitzone</li>
            <li>Ihre gewählten Benachrichtigungskategorien</li>
          </ul>

          <h2>3. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht:</p>
          <ul>
            <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
            <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
            <li>Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
            <li>Push-Benachrichtigungen jederzeit zu deaktivieren</li>
          </ul>

          <h2>4. Kontakt</h2>
          <p>
            Bei Fragen zum Datenschutz wenden Sie sich an:
            <br />
            E-Mail: datenschutz@laaber.de
            <br />
            Telefon: +49 (0) 9498 123-0
          </p>
        </div>
      </div>
    </div>
  )
}
