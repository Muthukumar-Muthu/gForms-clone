import { Button } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
import "./style.css";
const FormNavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="formnavbar">
        <Button onClick={() => navigate("viewform")}>Questions</Button>
        <Button onClick={() => navigate("responses")}>Responses</Button>
      </div>
      <Outlet />
    </>
  );
};
export default FormNavBar;
