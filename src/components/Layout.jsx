import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import styled from "styled-components";
const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

function Layout() {
  return (
    <section>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/test">Test</StyledLink>
        <StyledLink to="/courses">Szkolenia</StyledLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Outlet />
    </section>
  );
}

export default Layout;
