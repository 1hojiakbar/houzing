import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const flex = css`
  display: flex;
`;

// main container
const Container = styled.div``;

// main navbar item wrapper
const Wrapper = styled.div`
  ${flex}
  align-items: center;
  justify-content: space-between;
  background-color: var(--primaryColor);
  color: #fff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
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

// login button style
const LoginButton = styled.button`
  ${flex}
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 40px 12px 40px;
  width: 120px;
  height: 44px;
  color: var(--whiteColor);
  font-family: var(--mont);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
  text-align: left;
  border: 2px solid var(--whiteColor);
  border-radius: 2px;
  background: transparent;
  cursor: pointer;
`;

export {
  Container,
  Wrapper,
  Section,
  Logo,
  LogoImage,
  LogoTitle,
  Link,
  LoginButton,
};
