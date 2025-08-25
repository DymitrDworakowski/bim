import { useParams } from "react-router-dom";
import { getCourseById } from "../data/courses";

function CoursesDetails() {
  const { id } = useParams();
  const courses = getCourseById(id);

  return (
    <main className="min-h-[60vh] bg-gray-50 flex flex-col items-center justify-start py-8">
      <img
        src="https://via.placeholder.com/960x240"
        alt=""
        className="rounded-xl shadow mb-8 w-full max-w-4xl object-cover"
      />
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
          Kurs - {courses?.name} - {id}
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>
  );
}

export default CoursesDetails;
