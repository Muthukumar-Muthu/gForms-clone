import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import "./style.css";
const Header = () => {
  return (
    <header className="header">
      <Logo />
      <SearchBar />
    </header>
  );
};
export default Header;
