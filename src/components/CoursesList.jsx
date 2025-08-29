import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../images/SVG/Strzalka.svg";
import Logo from "../images/logoCourse.png";

function CoursesList({ courses }) {
  return (
    <div className="py-8">
      <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 justify-center max-w-6xl mx-auto ">
        {courses.map(({ id, name, description, price, date, hours, form }) => (
          <li
            key={id}
            className="uppercase border border-black p-4 rounded-lg hover:bg-orange-50 transition-colors flex flex-col w-full max-w-[340px] mx-auto min-h-[400px] "
          >
            <div className="flex flex-row gap-2 mb-4 mt-4 justify-center items-center">
              <img
                src={Logo}
                alt="BIM"
                width={80}
                height={80}
                className="mb-2"
              />
              <p className="font-semibold text-[rgb(250,150,0)] pt-2 text-center">
                {name}
              </p>
            </div>

            <div className="flex flex-col items-center mb-6">
              <div className="flex items-center gap-3 text-center">
                <span className="w-1.5 h-1.5 bg-[rgb(250,150,0)] rounded-full" />
                <p className="text-sm text-[rgb(250,150,0)]">{description}</p>
                <span className="w-1.5 h-1.5 bg-[rgb(250,150,0)] rounded-full" />
              </div>
            </div>

            <div className="flex flex-col gap-2 text-sm">
              <p className="font-bold">
                Forma szkolenia:{" "}
                <span className="text-[rgb(250,150,0)] font-normal">
                  {form}
                </span>
              </p>
              <p className="font-bold">
                Termin:{" "}
                <span className="text-[rgb(250,150,0)] font-normal">
                  {date}
                </span>
              </p>
              <p className="font-bold">
                Czas trwania:{" "}
                <span className="text-[rgb(250,150,0)] font-normal">
                  {hours}
                </span>
              </p>
              <p className="font-bold">
                Cena:{" "}
                <span className="text-[rgb(250,150,0)] font-normal">
                  {price} PLN
                </span>
              </p>
            </div>

            <div className="flex-grow" />

            <Link to={`${id}`} className="flex justify-center pt-8 mt-auto">
              <button className="uppercase border border-black hover:bg-[rgb(250,150,0)] text-black font-normal py-1 px-4 rounded-lg shadow transition-colors flex items-center gap-2">
                Dowiedz się więcej
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoursesList;
