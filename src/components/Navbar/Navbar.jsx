import "./style.css";
import Logo from "../Logo/Logo";

const Navbar = ({ actionButton }) => {
  return (
    <nav>
      <Logo />
      {actionButton}
    </nav>
  );
};
export default Navbar;
