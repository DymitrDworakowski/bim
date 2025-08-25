import React from "react";
import { Link } from "react-router-dom";

function CoursesList({ courses }) {
  return (
    <div>
      <h2>Dostępne kursy:</h2>
      <ul>
        {courses.map(({ id, name, level, price }) => (
          <Link to={`${id}`} key={id}>
            <li>
              {name} - poziom: {level} - cena: {price} PLN
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default CoursesList;
