import navbar from "../../utils/navbar";
import { Button } from "../Generic/index";
import logo from "../../assets/icons/logo.svg";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Body,
  Container,
  Link,
  Logo,
  LogoImage,
  LogoTitle,
  Main,
  Section,
  Wrapper,
} from "./style";
import Filter from "../Filter/Filter";

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
            <Button type="outlined" onClick={() => navigate("/login")} color="var(--whiteColor)">
              Login
            </Button>
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Body>
        <Outlet />
      </Body>
    </Container>
  );
};

export default Navbar;
