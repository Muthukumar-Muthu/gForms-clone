import { Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import "./style.css";

const AddNewQuestion = ({ addNewQuestion }) => {
  return (
    <div className="add-new-question">
      <Button
        onClick={addNewQuestion}
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
