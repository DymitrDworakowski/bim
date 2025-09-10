import CourseList from "../components/CoursesList";
import { courses } from "../data/courses";

function Courses() {
  return (
    <div>
      <section className="flex justify-center m-4">
        <ul className="flex sm:flex-row gap-4 flex-col">
          <li className="uppercase border border-black p-4 rounded-lg hover:bg-orange-50 transition-colors flex flex-col w-full max-w-[400px] mx-auto min-h-[200px]">
            <h3 className="text-[rgb(250,150,0)] p-2 text-center">Kursy dla firm</h3>
            <p className="lowercase">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus sunt excepturi nesciunt iusto dignissimos assumenda ab
              quae cupiditate a, sed reprehenderit? Deleniti optio quasi, amet
              natus reiciendis atque fuga dolore? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Impedit suscipit quisquam incidunt
              commodi fugiat aliquam praesentium ipsum quos unde voluptatum?
            </p>
          </li>
          <li className="uppercase border border-black p-4 rounded-lg hover:bg-orange-50 transition-colors flex flex-col w-full max-w-[400px] mx-auto min-h-[200px]">
            <h3 className="text-[rgb(250,150,0)] p-2 text-center">Indyidualne kursy</h3>
            <p className="lowercase">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus sunt excepturi nesciunt iusto dignissimos assumenda ab
              quae cupiditate a, sed reprehenderit? Deleniti optio quasi, amet
              natus reiciendis atque fuga dolore? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Impedit suscipit quisquam incidunt
              commodi fugiat aliquam praesentium ipsum quos unde voluptatum?
            </p>
          </li>
        </ul>
      </section>
      <CourseList courses={courses} />
    </div>
  );
}

export default Courses;
