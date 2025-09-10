import React from "react";
import { Target, ListChecks, Trophy, Lightbulb } from "lucide-react";

function CaseStudy({ id }) {
  return (
    <div className="p-8 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg space-y-6">
      {/* Tytuł */}
      <h2 className="text-3xl font-bold text-[rgb(250,150,0)] text-center">
        Case Study {id}
      </h2>

      {/* Intro */}
      <p className="text-lg text-gray-700 leading-relaxed">
        Przedstawiamy szczegółowe studium przypadku dla kursu o ID:{" "}
        <span className="font-semibold text-blue-700">{id}</span>. Poniżej
        znajdziesz opis projektu, cele, rezultaty oraz kluczowe wnioski z
        wdrożenia BIM.
      </p>

      {/* Opis projektu */}
      <div>
        <h3 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-2">
          <Target className="w-5 h-5 text-[rgb(250,150,0)]" />
          Opis projektu
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Projekt dotyczył wdrożenia technologii BIM w średniej wielkości firmie
          architektonicznej. Głównym celem było usprawnienie procesu
          projektowania, poprawa koordynacji międzybranżowej oraz automatyzacja
          generowania dokumentacji.
        </p>
      </div>

      {/* Cele */}
      <div>
        <h3 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-2">
          <ListChecks className="w-5 h-5 text-[rgb(250,150,0)]" />
          Cele wdrożenia
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>✅ Optymalizacja procesu projektowego</li>
          <li>✅ Redukcja liczby błędów i kolizji</li>
          <li>✅ Lepsza komunikacja między zespołami</li>
          <li>✅ Automatyzacja raportowania i dokumentacji</li>
        </ul>
      </div>

      {/* Rezultaty */}
      <div>
        <h3 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-2">
          <Trophy className="w-5 h-5 text-[rgb(250,150,0)]" />
          Rezultaty
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>🏆 Zmniejszenie liczby kolizji o 40%</li>
          <li>🏆 Skrócenie czasu przygotowania dokumentacji o 25%</li>
          <li>🏆 Wzrost satysfakcji zespołu projektowego</li>
        </ul>
      </div>

      {/* Wnioski */}
      <div>
        <h3 className="flex items-center gap-2 text-xl font-semibold text-blue-700 mb-2">
          <Lightbulb className="w-5 h-5 text-[rgb(250,150,0)]" />
          Wnioski
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Wdrożenie BIM przyniosło wymierne korzyści zarówno dla firmy, jak i
          dla klientów. Kluczowym elementem sukcesu była odpowiednia edukacja
          zespołu oraz dostosowanie narzędzi do specyfiki projektów.
        </p>
      </div>
    </div>
  );
}

export default CaseStudy;
