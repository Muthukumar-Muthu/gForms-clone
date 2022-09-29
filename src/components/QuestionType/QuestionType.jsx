import { Select } from "@chakra-ui/react";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
const QuestionType = ({ id, question, required }) => {
  const { questionType, dispatch, actions } = useContext(FormContext);
  const options = Object.entries(questionType).map(([key, value]) => (
    <option style={{ textTransform: "capitalize" }} value={key} key={key}>
      {value}
    </option>
  ));
  const changeHandler = (e) => {
    dispatch(
      actions.updateQuestion({
        id,
        type: e.target.value,
        answer: "",
        question,
        required,
      })
    );
  };
  return (
    <Select placeholder="select question type" onChange={changeHandler}>
      {options}
    </Select>
  );
};
export default QuestionType;
