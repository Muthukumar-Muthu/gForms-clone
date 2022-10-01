import { Input, Textarea } from "@chakra-ui/react";
import QUESTION_TYPE from "../../questionTypes";

const AnswerableAnswers = ({ type, responseHandler, response, id }) => {
  switch (type) {
    case QUESTION_TYPE.SHORT_ANSWER: {
      return (
        <Input
          type={"text"}
          value={response.answer}
          onChange={(e) => {
            responseHandler({ id, answer: e.target.value });
          }}
        />
      );
    }
    case QUESTION_TYPE.PARAGRAPH: {
      return (
        <Textarea
          value={response.answer}
          onChange={(e) => {
            responseHandler({ id, answer: e.target.value });
          }}
        />
      );
    }
    case QUESTION_TYPE.DATE: {
      return (
        <Input
          type={"date"}
          value={isCreatingNewForm ? "" : responses?.answer}
          onChange={(e) => {
            responseHandler({ id, answer: e.target.value });
          }}
        />
      );
    }
    case QUESTION_TYPE.TIME: {
      return (
        <Input
          type={"time"}
          value={isCreatingNewForm ? "" : responses?.answer}
          onChange={(e) => {
            responseHandler({ id, answer: e.target.value });
          }}
        />
      );
    }
    default:
      throw new Error("No matching question type found");
  }
};
export default AnswerableAnswers;
