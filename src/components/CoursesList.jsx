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
        {courses.map(({ id, name, description, price, date, hours, form }) => (
          <li
            key={id}
            className="uppercase border border-black p-4 rounded-lg hover:bg-orange-50 transition-colors flex flex-col w-full min-h-[400px] h-full"
          >
            <div className="flex flex-row gap-1 mb-4 mt-4 justify-evenly ">
              <img src={Logo} alt="BIM" width={100} height={90} className="mt-auto" />
              <p className="font-semibold text-[rgb(250,150,0)] mt-auto">{name}</p>
            </div>
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[rgb(250,150,0)] rounded-full"></span>
                <p className="text-sm text-[rgb(250,150,0)]">{description}</p>
                <span className="w-1.5 h-1.5 bg-[rgb(250,150,0)] rounded-full"></span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-black-500 font-bold">
                Forma szkolenia: <span className="text-[rgb(250,150,0)] font-normal">{form}</span>
              </p>
              <p className="text-sm text-black-500 font-bold">
                Termin: <span className="text-[rgb(250,150,0)] font-normal">{date}</span>
              </p>
              <p className="text-sm text-black-500 font-bold">
                Czas trwania: <span className="text-[rgb(250,150,0)] font-normal">{hours}</span>
              </p>
              <p className="text-sm text-black-500 font-bold">
                Cena: <span className="text-[rgb(250,150,0)] font-normal">{price} PLN</span>
              </p>
            </div>
            <div className="flex-grow" />
            <Link to={`${id}`} className="flex justify-center pt-12 mt-auto">
              <button className="uppercase  hover:bg-[rgb(250,150,0)] text-black font-bold py-1 px-6 rounded-lg shadow transition-colors flex items-center gap-2">
                Dowiedz się wiecej
                <ArrowRight className="w-12 h-12" />
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoursesList;
