import { NavLink, Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import styled from "styled-components";
import Footer from "./Footer.jsx";
import imgBim from "../images/LOGO.png";

const StyledLink = styled(NavLink)`
  color: black;
  text-align: justify;

  &.active {
    font-weight: bold;
    color: orange;
  }
  // &:hover {
  //   text-shadow: 0 2px 8px rgba(250, 150, 0, 0.7);
  // }
`;

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <nav className=" pt-4  ">
        <div className="flex md:flex-row gap-2 p-1 max-w-5xl mx-auto justify-between  items-end ">
          <NavLink to="/" end>
            <img
              src={imgBim}
              alt="BIM "
              width={390}
              height={80}
              className="mb-1.5  "
            />
          </NavLink>
          <h1 className="uppercase text-[rgb(250,150,0)] md:text-4xl text-2xl px-auto   ">
            Learn & Share
          </h1>
        </div>
        <div className="border-b-2 border-[rgb(250,150,0)] w-full" />

        <button
          className="md:hidden  text-[rgb(250,150,0)] text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className=" uppercase text-[rgb(250,150,0)] max-w-5xl  md:text-3xl mt-6  px-1 hidden md:flex justify-between mx-auto">
          <StyledLink to="/" end>
            Strona główna
          </StyledLink>
          <StyledLink to="/courses">Szkolenia</StyledLink>
          <StyledLink to="/case">CaseStudy</StyledLink>
          <StyledLink to="/test">Test</StyledLink>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-4 p-4 md:hidden text-[rgb(250,150,0)] uppercase text-base font-medium">
            <StyledLink to="/" end onClick={() => setMenuOpen(false)}>
              Strona główna
            </StyledLink>
            <StyledLink to="/courses" onClick={() => setMenuOpen(false)}>
              Szkolenia
            </StyledLink>
            <StyledLink to="/case" onClick={() => setMenuOpen(false)}>
              Case Study
            </StyledLink>
            <StyledLink to="/test" onClick={() => setMenuOpen(false)}>
              Test
            </StyledLink>
          </div>
        )}
      </nav>
      <section className="px-1 flex justify-between mx-auto max-w-5xl">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
      <Footer />
    </div>
  );
}

export default Layout;
