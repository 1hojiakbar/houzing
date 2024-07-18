import { Outlet, useNavigate } from "react-router-dom";
import {
  Container,
  Link,
  Logo,
  LogoImage,
  LogoTitle,
  Main,
  Section,
  Wrapper,
} from "./style";
import logo from "../../assets/icons/logo.svg";
import navbar from "../../utils/navbar";
import GenericButton from "../Generic/Button/Button";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section>
            <Logo onClick={() => navigate("/")}>
              <LogoImage src={logo} />
              <LogoTitle>Houzing</LogoTitle>
            </Logo>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link key={index} to={path}>
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            <GenericButton type="outlined" onClick={() => navigate("/login")}>
              Login
            </GenericButton>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  );
};

export default Navbar;
