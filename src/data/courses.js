export const courses = [
  {
    id: 1,
    name: "SZKOLENIE REVIT I (OD PODSTAW)",
    level: "basic",
    description: "Опис курсу 1...",
    price: 100,
  },
  {
    id: 2,
    name: "SZKOLENIE REVIT II (POZIOM ZAAWANSOWANY)",
    level: "advanced",
    description: "Опис курсу 2...",
    price: 150,
  },
  {
    id: 3,
    name: "SZKOLENIE REVIT ZESTAWIENIA",
    level: "basic",
    description: "Опис курсу 3...",
    price: 300,
  },
  {
    id: 4,
    name: "SZKOLENIA REVIT APPS",
    level: "basic",
    description: "Опис курсу 4...",
    price: 250,
  },
  {
    id: 5,
    name: "SZKOLENIE STUDENT REVIT (SZYBKI START)",
    level: "basic",
    description: "Опис курсу 5...",
    price: 60,
  },
  {
    id: 6,
    name: "SZKOLENIE STUDENT DYNAMO (SZYBKI START)",
    level: "basic",
    description: "Опис курсу 6...",
    price: 2350,
  },
];

export const getCourses = () => {
  return courses;
};

export const getCourseById = (courseId) => {
  return courses.find((course) => course.id = courseId);
};

