import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Modal from "./components/Modal.jsx";
import CourseList from "./components/CoursesList.jsx";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Modal />
      <CourseList />
    </div>
  );
}

export default App;
