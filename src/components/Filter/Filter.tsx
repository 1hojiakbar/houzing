import { Container } from "./style";
import { Button, Input } from "../Generic";
import searchIcon from "../../assets/icons/search.svg";
import advancedIcon from "../../assets/icons/advanced.svg";
import researchHomeIcon from "../../assets/icons/research-home.svg";

const Filter = () => {
  return (
    <Container>
      <Input
        placeholder="Enter an address, neighborhood, city, or ZIP code"
        leftIcon={researchHomeIcon}
      />
      <Button
        type="outlined"
        color="var(--primaryColor)"
        width={131}
        iconLeft={advancedIcon}
      >
        Advanced
      </Button>
      <Button type="primary" width={180} iconLeft={searchIcon}>
        Search
      </Button>
    </Container>
  );
};

export default Filter;
