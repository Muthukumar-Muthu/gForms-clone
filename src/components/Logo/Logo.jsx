import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./style.css";
const Logo = () => {
  return (
    <Text fontSize={"md"}>
      <Link to={"/"} className="logo" title="Form">
        form
      </Link>
    </Text>
  );
};
export default Logo;
