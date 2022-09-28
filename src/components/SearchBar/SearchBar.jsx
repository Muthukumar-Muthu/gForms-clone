import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import "./style.css";
const SearchBar = () => {
  return (
    <InputGroup className="search-bar">
      <InputLeftAddon children={<Search2Icon />} />
      <Input variant={"filled"} placeholder="Search" />
    </InputGroup>
  );
};
export default SearchBar;
