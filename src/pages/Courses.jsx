import CourseList from "../components/CoursesList";
import { courses } from "../data/courses";

function Courses() {
  return (
    <div className="min-h-[60vh]  flex flex-col items-center justify-start py-8">
      {/* <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Kursy BIM
      </h1> */}
      <CourseList courses={courses} />
    </div>
  );
}

export default Courses;
