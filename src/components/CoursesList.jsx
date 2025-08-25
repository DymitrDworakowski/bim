import React from "react";
import { Link } from "react-router-dom";

function CoursesList({ courses }) {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        Dostępne kursy:
      </h2>
      <ul>
        {courses.map(({ id, name, level, price }) => (
          <Link to={`${id}`} key={id}>
            <li className="border p-4 mb-4 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer flex flex-col md:flex-row md:items-center justify-between">
              <span className="font-semibold text-gray-800">{name}</span>
              <span className="text-sm text-gray-500">Poziom: {level}</span>
              <span className="text-sm text-blue-600 font-bold">
                Cena: {price} PLN
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default CoursesList;
