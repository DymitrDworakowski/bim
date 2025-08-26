import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import styled from "styled-components";
import Footer from "./Footer.jsx";
import imgBim from "../images/06.jpg";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    font-weight: bold;
    color: orange;
  }
  &:hover {
    text-shadow: 0 2px 8px rgba(231, 14, 14, 0.7);
  }
`;

function Layout() {
  return (
    <div>
      <nav>
        <div className="flex  md:flex-row   p-8 justify-evenly border-b-2 border-orange-500 items-center">
          <NavLink to="/" end className="text-white text-xl font-bold">
            <img src={imgBim} alt="BIM" width={200} height={90} />
          </NavLink>
          <h1 className="uppercase text-orange-500 font-bold text-2xl">
            Learn & Share
          </h1>
        </div>
        <div className=" uppercase text-orange-500 flex justify-center flex-col md:flex-row gap-5  p-4 ">
          <StyledLink to="/" end>
            Strona główna
          </StyledLink>
          <StyledLink to="/courses">Szkolenia</StyledLink>
          <StyledLink to="/test">Test</StyledLink>
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
