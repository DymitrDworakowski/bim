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
    <div className=" ">
      <nav className="mt-4 mb-0  flex flex-row items-baseline justify-center mx-auto gap-2 w-full max-w-5xl ">
        <div className="flex md:flex-col gap-2 py-2">
          <NavLink to="/" end>
            <img src={imgBim} alt="BIM" width={300} height={80} />
          </NavLink>
          <h1 className="uppercase text-[rgb(250,150,0)] md:text-2xl text-2xl px-auto">
            Learn & Share
          </h1>
        </div>
        <div className="uppercase text-[rgb(250,150,0)] gap-11 md:text-xl mt-6 px-1 hidden md:flex ml-auto ">
          <StyledLink to="/" end> 
            Strona główna 
          </StyledLink>
          <StyledLink to="/courses">Szkolenia</StyledLink>
          <StyledLink to="/case">CaseStudy</StyledLink>
          <StyledLink to="/test">Test</StyledLink>
          <StyledLink to="/blog">Blog</StyledLink>
        </div>

        <button
          className="md:hidden text-[rgb(250,150,0)] text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {menuOpen && (
          <div className="flex flex-col gap-4 p-4 md:hidden text-[rgb(250,150,0)] uppercase text-base font-medium ">
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
            <StyledLink to="/blog" onClick={() => setMenuOpen(false)}>
              Blog
            </StyledLink>
          </div>
        )}
        
      </nav>
      <div className="border-b-2 border-[rgb(250,150,0)] w-full" /> 
      <section className=" flex flex-col min-h-screen mx-auto max-w-5xl justify-between">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
      <Footer />
    </div>
  );
}

export default Layout;
