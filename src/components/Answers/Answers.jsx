import { Input, Textarea } from "@chakra-ui/react";

const Answers = ({ type }) => {
  switch (type) {
    case QUESTION_TYPE.SHORT_ANSWER: {
      return <Input type={"text"} readOnly />;
    }
    case QUESTION_TYPE.PARAGRAPH: {
      return <Textarea readOnly />;
    }
    case QUESTION_TYPE.DATE: {
      return <Input type={"date"} readOnly />;
    }
    case QUESTION_TYPE.TIME: {
      return <Input type={"time"} readOnly />;
    }
    default:
      return <Input type={"text"} readOnly />;
  }
};
export default Answers;

const QUESTION_TYPE = {
  SHORT_ANSWER: "SHORT_ANSWER",
  PARAGRAPH: "PARAGRAPH",
  //   multipleChoice: "multiple choice",
  //   checkboxes: "Checkboxes",
  //   dropDown: "Drop down",
  DATE: "DATE",
  TIME: "TIME",
};
