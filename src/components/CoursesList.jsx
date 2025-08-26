// import useState from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../images/SVG/Strzalka.svg";
import Logo from "../images/logoCourse.png";

function CoursesList({ courses }) {
  // const [isOpen, setIsOpen] = useState(false);

  // function modalOpen() {
  //   setIsOpen(true);
  // }

  return (
    <div className="mx-auto p-8 mt-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9">
        {courses.map(({ id, name, description, price, date, howers, form }) => (
          <div
            key={id}
            className="uppercase border border-orange-500 p-4 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer flex flex-col justify-between w-full h-96"
          >
            <div className="flex  gap-3 items-center mb-4">
              <img src={Logo} alt="BIM" width={100} height={90} />
              <p className="font-semibold text-orange-500">{name}</p>
            </div>

            <li>
              <p className="text-sm text-orange-500">*{description}*</p>
              <p className="text-sm text-black-500">
                Forma szkolenia: <span className="text-orange-500">{form}</span>
              </p>
              <p className="text-sm text-black-500">
                Termin: <span className="text-orange-500">{date}</span>
              </p>
              <p className="text-sm text-black-500">
                Czas trwania: <span className="text-orange-500">{howers}</span>
              </p>
              <p className="text-sm text-black-500 font-bold">
                Cena: <span className="text-orange-500">{price} PLN</span>
              </p>
              <Link to={`${id}`}>
                <button className="mt-8 bg-orange-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow transition-colors flex items-center gap-2">
                  Dowiedz się wiecej
                  <ArrowRight className="w-12 h-12" />
                </button>
              </Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CoursesList;
