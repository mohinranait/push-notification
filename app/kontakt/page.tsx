export default function Kontakt() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Kontakt</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Markt Laaber</h2>
            <div className="space-y-2">
              <p>Hauptstraße 1</p>
              <p>93164 Laaber</p>
              <p>Deutschland</p>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Telefon</h3>
              <p>+49 (0) 9498 123-0</p>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold mb-2">E-Mail</h3>
              <p>info@laaber.de</p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Öffnungszeiten</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Montag - Freitag:</span>
                <span>8:00 - 12:00 Uhr</span>
              </div>
              <div className="flex justify-between">
                <span>Donnerstag:</span>
                <span>14:00 - 18:00 Uhr</span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Technischer Support</h3>
              <p>Für Fragen zu den Push-Benachrichtigungen:</p>
              <p>support@laaber.de</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
