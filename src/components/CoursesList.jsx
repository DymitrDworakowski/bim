import React from "react";

const courses = {
  items: [
    { id: 1, name: "SZKOLENIE REVIT I (OD PODSTAW)", level: "basic" },
    {
      id: 2,
      name: "SZKOLENIE REVIT II (POZIOM ZAAWANSOWANY)",
      level: "advanced",
    },
    { id: 3, name: "SZKOLENIE REVIT ZESTAWIENIA", level: "basic" },
    { id: 4, name: "SZKOLENIA REVIT APPS", level: "basic" },
    { id: 5, name: "SZKOLENIE STUDENT REVIT (SZYBKI START)", level: "basic" },
    { id: 6, name: "SZKOLENIE STUDENT DYNAMO (SZYBKI START)", level: "basic" },
  ],
};

function CoursesList() {
  return (
    <div>
      <h2>Dostępne kursy:</h2>
      <ul>
       {courses.items.map(({id,name,level}) => (
          <li key={id}>
            {name} - poziom: {level}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoursesList;
