import { NavLink, Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion"; 
import Footer from "./Footer.jsx";
import Loader from "./Loader.jsx";
import imgBim from "../images/LOGO.png";

const StyledLink = styled(NavLink)`
  color: black;
  text-align: justify;

  &.active {
    font-weight: bold;
    color: orange;
  }
`;

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="p-1">
      <nav className="mt-4 mb-0 flex flex-row items-baseline justify-center mx-auto gap-2 w-full max-w-5xl">
        {/* Logo + назва */}
        <div className="flex md:flex-col gap-2 py-2">
          <NavLink to="/" end>
            <img src={imgBim} alt="BIM" width={300} height={80} />
          </NavLink>
          <h1 className="uppercase text-[rgb(250,150,0)] md:text-2xl text-2xl px-auto">
            Learn & Share
          </h1>
        </div>

        {/* Десктопне меню */}
        <div className="uppercase text-[rgb(250,150,0)] gap-11 md:text-xl mt-6 px-1 hidden md:flex ml-auto">
          <StyledLink to="/" end>
            Strona główna
          </StyledLink>
          <StyledLink to="/courses">Szkolenia</StyledLink>
          <StyledLink to="/case">CaseStudy</StyledLink>
          <StyledLink to="/blog">Blog</StyledLink>
        </div>

        {/* Бургер для телефону */}
        <button
          className="md:hidden text-[rgb(250,150,0)] text-3xl ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Мобільне меню з анімацією */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-2/3 bg-white text-white flex flex-col gap-6 p-6 z-50 uppercase text-lg"
            >
              <button
                className="self-end text-3xl text-orange-400"
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>

              <StyledLink to="/" end onClick={() => setMenuOpen(false)}>
                Strona główna
              </StyledLink>
              <StyledLink to="/courses" onClick={() => setMenuOpen(false)}>
                Szkolenia
              </StyledLink>
              <StyledLink to="/case" onClick={() => setMenuOpen(false)}>
                Case Study
              </StyledLink>
              <StyledLink to="/blog" onClick={() => setMenuOpen(false)}>
                Blog
              </StyledLink>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="border-b-2 border-[rgb(250,150,0)] w-full" />
      <section className="flex flex-col min-h-screen mx-auto max-w-5xl justify-between">
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </section>
      <Footer />
    </div>
  );
}

export default Layout;
