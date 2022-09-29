import { Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import "./style.css";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";

const AddNewQuestion = () => {
  const { dispatch, actions } = useContext(FormContext);
  return (
    <div className="add-new-question">
      <Button
        onClick={() => dispatch(actions.addQuestion())}
        variant={"solid"}
        rightIcon={<AddIcon />}
        backgroundColor={"#007ACC"}
        color="white"
      >
        Add new Question
      </Button>
    </div>
  );
};
export default AddNewQuestion;
