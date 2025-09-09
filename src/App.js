import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import Layout from "./components/Layout.jsx";
import { jwtDecode } from "jwt-decode";

const Home = lazy(() => import("./pages/Home"));
const Courses = lazy(() => import("./pages/Courses.jsx"));
const CoursesDetails = lazy(() => import("./pages/CoursesDetails.jsx"));
const CaseStudy = lazy(() => import("./pages/CaseStudy.jsx"));
const Blog = lazy(() => import("./pages/Blog.jsx"));
const AdminLogin = lazy(() => import("./pages/AdminLogin.jsx"));
const AdminBlogs = lazy(() => import("./pages/AdminBlogs.jsx"));
const BlogDetail = lazy(() => import("./components/BlogDetail.jsx"));

function App() {
  const token = localStorage.getItem("token");
  let role = null;

  if (token) {
    try {
      const decoded = jwtDecode(token);
      role = decoded.role;
    } catch (err) {
      console.error("Invalid token");
    }
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="admin" element={<AdminLogin />} />
        <Route
          path="/admin/blogs"
          element={role === "admin" ? <AdminBlogs /> : <Navigate to="/admin" />}
        />
        <Route path="blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="case" element={<CaseStudy />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:id" element={<CoursesDetails />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
