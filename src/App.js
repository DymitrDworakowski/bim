import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "./components/Layout.jsx";

const Home = lazy(() => import("./pages/Home"));
const Test = lazy(() => import("./components/Test.jsx"));
const Courses = lazy(() => import("./pages/Courses.jsx"));
const CoursesDetails = lazy(() => import("./pages/CoursesDetails.jsx"));
const CaseStudy = lazy(() => import("./pages/CaseStudy.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx")); 
//

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="blog" element={<Blog />} />
        <Route path="case" element={<CaseStudy />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:id" element={<CoursesDetails />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
