import React from "react";
import { Link } from "react-router-dom";

function CoursesList({ courses }) {
  return (
    <div className=" md:auto-cols-auto  mx-auto  p-8 mt-8">
      {/* <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        Dostępne kursy:
      </h2> */}
      <ul className="grid grid-rows-subgrid sm:grid-cols-3  gap-9">
        {courses.map(({ id, name, description, price, date, howers, form }) => (
          <li
            key={id}
            className="uppercase  border border-orange-500 p-4 mb-4 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer flex flex-wrap md:flex-row md:items-center justify-between w-80  h-96"
          >
            <Link to={`${id}`}>
              <p className="font-semibold text-orange-500">{name}</p>
              <p className="text-sm text-orange-500">*{description}*</p>
              <p className="text-sm text-gray-500">
                Forma szkolenia: <span>{form}</span>
              </p>
              <p className="text-sm text-gray-500">
                Termin: <span>{date}</span>
              </p>{" "}
              <p className="text-sm text-gray-500">Czas trwania: </p>{" "}
              <span>{howers}</span>
              <p className="text-sm text-blue-600 font-bold">
                Cena: {price} PLN
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoursesList;
