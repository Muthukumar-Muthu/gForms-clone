import { Input, Textarea } from "@chakra-ui/react";
import QUESTION_TYPE from "../../questionTypes";

const ReadOnlyAnswer = ({ type }) => {
  switch (type) {
    case QUESTION_TYPE.SHORT_ANSWER: {
      return <Input type={"text"} defaultValue="" readOnly />;
    }
    case QUESTION_TYPE.PARAGRAPH: {
      return <Textarea defaultValue={""} readOnly />;
    }
    case QUESTION_TYPE.DATE: {
      return <Input type={"date"} readOnly defaultValue={""} />;
    }
    case QUESTION_TYPE.TIME: {
      return <Input type={"time"} readOnly defaultValue={""} />;
    }
    default:
      throw new Error("No matching question type found");
  }
};
export default ReadOnlyAnswer;
