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
    <div>
      Courses
      <CourseList courses={courses} />
      {!showModal && (
        <button onClick={handleOpenModal}>Zostaw swój kontakt</button>
      )}
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}

export default Courses;
