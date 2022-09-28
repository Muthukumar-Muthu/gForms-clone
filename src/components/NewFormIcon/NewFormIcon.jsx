import { AddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import "./style.css";
const NewFormIcon = () => {
  const navigate = useNavigate();
  return (
    <div
      className="add-icon"
      onClick={() => navigate("/forms/new/edit")}
      tabIndex={0}
    >
      {<AddIcon />}
    </div>
  );
};
export default NewFormIcon;
