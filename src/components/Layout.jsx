import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import styled from "styled-components";
import Footer from "./Footer.jsx";
import imgBim from "../images/LOGO.png";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    font-weight: bold;
    color: orange;
  }
  // &:hover {
  //   text-shadow: 0 2px 8px rgba(250, 150, 0, 0.7);
  // }
`;

function Layout() {
  return (
    <div className="flex flex-col min-h-screen justify-center">
      <nav className=" pt-4">
        <div className="flex md:flex-row gap-4 p-1 justify-around border-b-2 border-[rgb(250,150,0)] items-end  ">
          <NavLink to="/" end>
            <img
              src={imgBim}
              alt="BIM "
              width={390}
              height={80}
              className="mb-1.5  "
            />
          </NavLink>
          <h1 className="uppercase text-[rgb(250,150,0)] md:text-4xl text-2xl px-auto ">
            Learn & Share
          </h1>
        </div>
        <div className=" uppercase text-[rgb(250,150,0)] flex justify-evenly flex-col md:flex-row md:text-3xl gap-0.2 p-4   ">
          <StyledLink to="/" end>
            Strona główna
          </StyledLink>
          <StyledLink to="/courses">Szkolenia</StyledLink>
          <StyledLink to="/case">CaseStudy</StyledLink>
          <StyledLink to="/test">Test</StyledLink>
        </div>
      </nav>
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
      <Footer />
    </div>
  );
}

export default Layout;
