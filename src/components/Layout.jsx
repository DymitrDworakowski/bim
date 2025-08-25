import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import styled from "styled-components";
import Footer from "./Footer.jsx";
import imgBim from "../images/06.jpg";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

function Layout() {
  return (
    <div>
      <nav>
        <div className="flex flex-col md:flex-row gap-5 bg-gray-800 p-8 ">
          <NavLink to="/" end className="text-white text-xl font-bold">
            <img src={imgBim} alt="BIM" width={200} height={90} />
          </NavLink>
        </div>
        <div className="flex justify-center flex-col md:flex-row gap-5  p-4">
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/test">Test</StyledLink>
          <StyledLink to="/courses">Szkolenia</StyledLink>
        </div>
      </nav>
      <section className="p-4 md:p-8 lg:p-12">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
      <Footer />
    </div>
  );
}

export default Layout;
