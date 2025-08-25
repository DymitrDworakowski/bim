import React from "react";
import { Link } from "react-router-dom";

function CoursesList({ courses }) {
  return (
    <div className=" md:auto-cols-auto  mx-auto  p-8 mt-8">
      {/* <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        Dostępne kursy:
      </h2> */}
      <ul className="grid grid-rows-subgrid sm:grid-cols-3  gap-4">
        {courses.map(({ id, name, description, price,date,howers,form }) => (
          <Link to={`${id}`} key={id}>
            <li className="uppercase  border border-orange-500 p-4 mb-4 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer flex flex-wrap md:flex-row md:items-center justify-between w-72  h-96">
              <span className="font-semibold text-orange-500">{name}</span>
              <span className="text-sm text-orange-500">*{description}*</span>
              <span className="text-sm text-gray-500">Forma szkolenia: {form}</span>
              <span className="text-sm text-gray-500">Termin: {date}</span>
              <span className="text-sm text-gray-500">Czas trwania: {howers}</span>
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
