import React from "react";
import hero from "../images/hero.jpg";
import { Users, Box, Search, BarChart3, CheckCircle2 } from "lucide-react";

function Home() {
  const services = [
    {
      icon: <Users className="w-8 h-8 text-[rgb(250,150,0)]" />,
      title: "Szkolenia i Wdrożenia BIM",
      desc: "Praktyczne szkolenia i wdrażanie standardów BIM w firmach.",
      link: "#",
    },
    {
      icon: <Box className="w-8 h-8 text-[rgb(250,150,0)]" />,
      title: "Projektowanie i Modelowanie BIM",
      desc: "Modelowanie architektoniczne, konstrukcyjne i MEP w Revit.",
      link: "#",
    },
    {
      icon: <Search className="w-8 h-8 text-[rgb(250,150,0)]" />,
      title: "Koordynacja i Audyty BIM",
      desc: "Wykrywanie kolizji, zapewnienie jakości danych i procesów.",
      link: "#",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[rgb(250,150,0)]" />,
      title: "Doradztwo i Strategia BIM",
      desc: "Pomoc w BEP, dokumentacji przetargowej i strategii BIM.",
      link: "#",
    },
  ];

  return (
    <div className="p-4 md:p-8 lg:p-12 min-h-[80vh] flex flex-col items-center justify-center gap-12">
      {/* Hero */}
      <div className="w-full flex flex-col items-center">
        <img
          src={hero}
          alt="hero"
          className="rounded-2xl shadow-xl max-h-[400px] object-cover w-full mb-8"
        />
        <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
            Twoja Wizja. Nasza Technologia. Jeden Spójny Model.
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Zamieniamy złożone projekty budowlane w przewidywalne i efektywne
            procesy dzięki wdrożeniom BIM, szkoleniom Revit oraz outsourcingowi
            najwyższej jakości.
          </p>
        </div>
      </div>

      {/* Sekcja 1 */}
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-center mb-6 text-[rgb(250,150,0)]">
          Witamy w Świecie Inteligentnego Budownictwa
        </h2>
        <div className="bg-white rounded-2xl shadow-md p-6">
          <p className="text-gray-700 leading-relaxed">
            Jesteśmy zespołem ekspertów BIM i pasjonatów technologii Revit.
            Wierzymy, że przyszłość projektowania, budowy i zarządzania
            nieruchomościami leży w inteligentnych danych, a nie tylko w
            rysunkach.
          </p>
        </div>
      </div>

      {/* Usługi */}
      <div className="max-w-5xl w-full">
        <h2 className="text-2xl font-semibold text-center mb-8 text-[rgb(250,150,0)]">
          W czym możemy Ci pomóc?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold text-blue-700">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4 flex-grow">{item.desc}</p>
              <a
                href={item.link}
                className="inline-block px-4 py-2 rounded-lg bg-[rgb(250,150,0)] text-white font-medium hover:bg-orange-600 transition self-start"
              >
                Dowiedz się więcej
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Dlaczego my */}
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl font-semibold text-center mb-6 text-[rgb(250,150,0)]">
          Dlaczego warto nam zaufać?
        </h2>
        <ul className="bg-white rounded-2xl shadow-md p-6 space-y-4 text-gray-700">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            Praktyczna wiedza z realnych projektów.
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            Kompleksowe podejście techniczne, prawne i biznesowe.
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            Jasna i zrozumiała komunikacja.
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            Skupienie na wynikach i redukcji kosztów.
          </li>
        </ul>
      </div>

      {/* CTA */}
      <div className="max-w-3xl text-center">
        <h2 className="text-2xl font-semibold mb-4 text-[rgb(250,150,0)]">
          Gotowy, aby Twoje projekty zyskały nowy wymiar?
        </h2>
        <p className="text-gray-700 mb-6">
          BIM to standard w nowoczesnym budownictwie. Skontaktuj się z nami już
          dziś, a pomożemy Ci znaleźć najlepsze rozwiązanie dla Twoich wyzwań.
        </p>
        <a
          href="#"
          className="px-6 py-3 rounded-xl bg-[rgb(250,150,0)] text-white font-semibold shadow-md hover:bg-orange-600 transition"
        >
          Umów bezpłatną konsultację
        </a>
      </div>
    </div>
  );
}

export default Home;
