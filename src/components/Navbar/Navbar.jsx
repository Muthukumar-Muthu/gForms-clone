import { Button } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import "./style.css";
import Logo from "../Logo/Logo";
const Navbar = ({ submitForm }) => {
  return (
    <nav>
      <Logo />
      <Button
        marginLeft={"auto"}
        rightIcon={<ArrowRightIcon />}
        onClick={submitForm}
      >
        Send
      </Button>
    </nav>
  );
};
export default Navbar;
