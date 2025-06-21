"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Bell, Shield, AlertTriangle, Calendar, Building2 } from "lucide-react";

declare global {
  interface Window {
    OneSignal: any;
  }
}

const categories = [
  {
    id: "weekly-report",
    title: "Wochenrückblick",
    description:
      "Ihr Wochenrückblick aus dem Rathaus! Jeden Freitag erhalten Sie unseren Wochenbericht – kompakt zusammengefasst, was die Verwaltung diese Woche im Ort bewegt hat. Von wichtigen Entscheidungen über Projekte, Veranstaltungen oder interessante Fakten über die Gemeinde.",
    icon: Calendar,
    tag: "weekly_report",
  },
  {
    id: "town-hall",
    title: "Rathaus Nachrichten",
    description:
      "Hier erhalten Sie alle allgemeinen Informationen aus der Verwaltung. Wir informieren Sie über Schließtage, geänderte Öffnungszeiten, bevorstehende Gemeinderatssitzungen, wichtige Ergebnisse aus dem Haushaltsbericht, geplante Bauvorhaben der Gemeinde oder ein neues Mitteilungsblatt.",
    icon: Building2,
    tag: "town_hall",
  },
  {
    id: "emergencies",
    title: "Notfälle",
    description:
      "Dieser Kanal ist für wichtige Informationen im Notfall oder bei Katastrophen. Ob Unwetterwarnungen, Hochwasser oder andere akute Gefahren im Ortsbereich – wir informieren Sie umgehend.",
    icon: AlertTriangle,
    tag: "emergencies",
  },
  {
    id: "closures",
    title: "Sperrungen und Störungen",
    description:
      "Hier gibt es aktuelle Meldungen zur öffentlichen Versorgung und zum Verkehr. Das bedeutet: Sofortige Infos zu Straßensperrungen, wichtigen Baustellen und anderen relevanten Beeinträchtigungen.",
    icon: Shield,
    tag: "closures",
  },
  {
    id: "events",
    title: "Veranstaltungen",
    description:
      "Was ist diese Woche los in Laaber? Jeden Montag liefern wir Ihnen die Veranstaltungen für die kommende Woche! Erfahren Sie auf einen Blick, welche öffentlichen Feste, Märkte, Konzerte oder Sportevents anstehen.",
    icon: Calendar,
    tag: "events",
  },
];

export default function LaaberNotifications() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [oneSignalReady, setOneSignalReady] = useState(false);

  useEffect(() => {
    // Initialize OneSignal
    const initOneSignal = () => {
      if (typeof window !== "undefined" && window.OneSignal) {
        window.OneSignal.init({
          appId: "YOUR_ONESIGNAL_APP_ID", // Replace with your actual OneSignal App ID
          safari_web_id: "web.onesignal.auto.YOUR_SAFARI_WEB_ID", // Replace if you have Safari Web ID
          notifyButton: {
            enable: false,
          },
          allowLocalhostAsSecureOrigin: true,
        });

        window.OneSignal.showSlidedownPrompt().then(() => {
          setOneSignalReady(true);
        });
      }
    };

    // Load OneSignal SDK
    if (!document.getElementById("onesignal-sdk")) {
      const script = document.createElement("script");
      script.id = "onesignal-sdk";
      script.src = "https://cdn.onesignal.com/sdks/OneSignalSDK.js";
      script.async = true;
      script.onload = initOneSignal;
      document.head.appendChild(script);
    } else {
      initOneSignal();
    }
  }, []);

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories((prev) => [...prev, categoryId]);
    } else {
      setSelectedCategories((prev) => prev.filter((id) => id !== categoryId));
    }
  };

  const handleSubscribe = async () => {
    if (!oneSignalReady || selectedCategories.length === 0) {
      alert("Bitte wählen Sie mindestens eine Kategorie aus.");
      return;
    }

    setIsLoading(true);

    try {
      // Request notification permission
      const permission = await window.OneSignal.requestPermission();

      if (permission) {
        // Subscribe user to selected categories
        const selectedTags = categories
          .filter((cat) => selectedCategories.includes(cat.id))
          .map((cat) => cat.tag);

        const tags: { [key: string]: string } = {};
        selectedTags.forEach((tag) => {
          tags[tag] = "true";
        });

        await window.OneSignal.sendTags(tags);
        setIsSubscribed(true);
        alert(
          "Erfolgreich angemeldet! Sie erhalten nun Benachrichtigungen für die ausgewählten Kategorien."
        );
      } else {
        alert(
          "Benachrichtigungen wurden nicht erlaubt. Bitte aktivieren Sie Benachrichtigungen in Ihren Browser-Einstellungen."
        );
      }
    } catch (error) {
      console.error("Subscription error:", error);
      alert(
        "Es gab einen Fehler bei der Anmeldung. Bitte versuchen Sie es erneut."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Topic Selection */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Bitte abonnieren Sie die Themen die Sie interessieren
            </h3>
            <p className="text-gray-600">
              Wählen Sie aus den folgenden Kategorien:
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={category.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id={category.id}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={(checked) =>
                          handleCategoryChange(category.id, checked as boolean)
                        }
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <CardTitle className="flex items-center space-x-2 text-lg">
                          <IconComponent className="w-5 h-5 text-blue-600" />
                          <span>{category.title}</span>
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Subscribe Button */}
        <section className="text-center mb-12">
          <Card className="bg-green-50 border-green-200 max-w-md mx-auto">
            <CardContent className="pt-6">
              <Button
                onClick={handleSubscribe}
                disabled={
                  isLoading || selectedCategories.length === 0 || isSubscribed
                }
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Wird angemeldet...</span>
                  </div>
                ) : isSubscribed ? (
                  "Erfolgreich angemeldet!"
                ) : (
                  `Benachrichtigungen aktivieren (${selectedCategories.length} ausgewählt)`
                )}
              </Button>
              {selectedCategories.length === 0 && (
                <p className="text-sm text-gray-500 mt-2">
                  Bitte wählen Sie mindestens eine Kategorie aus
                </p>
              )}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
