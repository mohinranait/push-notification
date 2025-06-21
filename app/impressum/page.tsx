export default function Impressum() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>

        <div className="prose max-w-none">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Markt Laaber
            <br />
            Hauptstraße 1<br />
            93164 Laaber
            <br />
            Deutschland
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +49 (0) 9498 123-0
            <br />
            E-Mail: info@laaber.de
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            DE123456789
          </p>

          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Bürgermeister Max Mustermann
            <br />
            Hauptstraße 1<br />
            93164 Laaber
          </p>
        </div>
      </div>
    </div>
  )
}
