import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import CourseList from "./CoursesList";
import imgBim from "../images/06.jpg";

function Home() {
  const [showModal, setShowModal] = useState(false);

  function handleOpenModal() {
    setShowModal(true);
  }

  return (
    <div>
      <img src={imgBim} alt="BIM" width={200} height={90} />
      <h1>Hello</h1>
      <CourseList />
      {!showModal && (
        <button onClick={handleOpenModal}>Zostaw swój kontakt</button>
      )}
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}

export default Home;
