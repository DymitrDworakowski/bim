import { React, useState } from "react";
import Modal from "../components/Modal";
import CourseList from "../components/CoursesList";
import { courses } from "../data/courses";

function Courses() {
  const [showModal, setShowModal] = useState(false);

  function handleOpenModal() {
    setShowModal(true);
  }

  return (
    <div className="min-h-[60vh]  flex flex-col items-center justify-start py-8">
      {/* <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Kursy BIM
      </h1> */}
      <CourseList courses={courses} />
      {!showModal && (
        <button
          onClick={handleOpenModal}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow transition-colors"
        >
          Zostaw swój kontakt
        </button>
      )}
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}

export default Courses;
