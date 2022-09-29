import { Select } from "@chakra-ui/react";
const QuestionType = ({ id, updateNewQuestion, question, required }) => {
  const options = Object.entries(QUESTION_TYPE).map(([key, value]) => (
    <option style={{ textTransform: "capitalize" }} value={key} key={key}>
      {value}
    </option>
  ));
  return (
    <Select
      placeholder="select question type"
      onChange={(e) => {
        updateNewQuestion({
          id,
          type: e.target.value,
          answer: "",
          question,
          required,
        });
      }}
    >
      {options}
    </Select>
  );
};
export default QuestionType;

const QUESTION_TYPE = {
  SHORT_ANSWER: " SHORT_ANSWER",
  PARAGRAPH: "PARAGRAPH",
  //   multipleChoice: "multiple choice",
  //   checkboxes: "Checkboxes",
  //   dropDown: "Drop down",
  DATE: "DATE",
  TIME: "TIME",
};
