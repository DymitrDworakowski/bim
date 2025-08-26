export const courses = [
  {
    id: 1,
    name: "SZKOLENIE REVIT I",
    level: "basic",
    form:"stacjonarne/online",
    description: "Nauka Revit od podstaw.",
    price: 499,
    date: "Kontakt z działem szkoleń",
    howers: "32 godziny",
  },
  {
    id: 2,
    name: "SZKOLENIE REVIT II",
    form:"stacjonarne/online",
    level: "advanced",
    description: "Kurs zaawansowany.",
    price: 599,
    date: "Kontakt z działem szkoleń",
    howers: "32 godziny",
  },
  // {
  //   id: 3,
  //   name: "SZKOLENIE REVIT ZESTAWIENIA",
  //   form:"stacjonarne/online",
  //   level: "basic",
  //   description: "Опис курсу 3...",
  //   price: 300,
  //   date: "Kontakt z działem szkoleń",
  //   howers: "32 godziny",
  // },
  {
    id: 4,
    name: "SZKOLENIA REVIT APP",
    form:"stacjonarne/online",
    level: "basic",
    description: "Dodatki pyrevit diroots",
    price: 199,
    date: "Kontakt z działem szkoleń",
    howers: "2 godziny",
  },
  // {
  //   id: 5,
  //   name: "SZKOLENIE STUDENT REVIT (SZYBKI START)",
  //   form:"stacjonarne/online",
  //   level: "basic",
  //   description: "Опис курсу 5...",
  //   price: 60,
  //   date: "Kontakt z działem szkoleń",
  //   howers: "32 godziny",
  // },
  // {
  //   id: 6,
  //   name: "SZKOLENIE STUDENT DYNAMO (SZYBKI START)",
  //   form:"stacjonarne/online",
  //   level: "basic",
  //   description: "Опис курсу 6...",
  //   price: 2350,
  //   date: "Kontakt z działem szkoleń",
  //   howers: "32 godziny",
  // },
];

export const getCourses = () => {
  return courses;
};

export const getCourseById = (courseId) => {
  return courses.find((course) => (course.id = courseId));
};
