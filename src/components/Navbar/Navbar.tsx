import { Outlet, useNavigate } from "react-router-dom";
import {
  Container,
  Link,
  LoginButton,
  Logo,
  LogoImage,
  LogoTitle,
  Section,
  Wrapper,
} from "./style";
import logo from "../../assets/icons/logo.svg";
import navbar from "../../utils/navbar";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Section>
          <Logo onClick={() => navigate("/")}>
            <LogoImage src={logo} />
            <LogoTitle>Houzing</LogoTitle>
          </Logo>
        </Section>
        <Section>
          {navbar.map(({ title, path }, index) => {
            return (
              <Link key={index} to={path}>
                {title}
              </Link>
            );
          })}
        </Section>
        <Section>
          <LoginButton>Login</LoginButton>
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Navbar;
