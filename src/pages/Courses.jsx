import CourseList from "../components/CoursesList";
import { courses } from "../data/courses";

function Courses() {
  return (
    <div  >
      {/* <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Kursy BIM
      </h1> */}
      <CourseList courses={courses} />
    </div>
  );
}

export default Courses;
