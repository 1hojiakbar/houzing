import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const flex = css`
  display: flex;
`;

// main outer container
const Container = styled.div`
  ${flex}
  flex-direction: column;
  justify-content: center;
`;

// main wrapper
const Main = styled.div`
  ${flex}
  justify-content: center;
  background-color: var(--primaryColor);
`;

// main navbar item wrapper
const Wrapper = styled.div`
  ${flex}
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  width: 100%;
  max-width: 1440px;
`;

// navbar sections
const Section = styled.div`
  ${flex}
  align-items: center;
  column-gap: 6px;
  .active {
    font-weight: 400;
    color: #f9e0ae;
  }
`;

// navbar logo styles
const Logo = styled.div`
  ${flex}
  align-items: center;
  column-gap: 6px;
  cursor: pointer;
`;

const LogoImage = styled.img`
  width: 34px;
  height: 34px;
`;

const LogoTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  font-family: var(--mont);
`;

// navbar item styles
const Link = styled(NavLink)`
  color: var(--whiteColor);
  font-family: var(--mont);
  padding: 0 32px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0%;
  text-decoration: none;
`;

export { Container, Main, Wrapper, Section, Logo, LogoImage, LogoTitle, Link };
