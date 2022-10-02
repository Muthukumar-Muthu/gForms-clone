import { Input, Textarea } from "@chakra-ui/react";
import { useContext } from "react";

import { ViewFormContext } from "../../context/ViewFormContext";
import QUESTION_TYPE from "../../questionTypes";

const AnswerableAnswers = ({ type, id }) => {
  const { responses, responseHandler } = useContext(ViewFormContext);
  const response = responses[id];

  switch (type) {
    case QUESTION_TYPE.SHORT_ANSWER: {
      return (
        <Input
          type={"text"}
          value={response}
          onChange={(e) => {
            responseHandler({ id, answer: e.target.value });
          }}
        />
      );
    }
    case QUESTION_TYPE.PARAGRAPH: {
      return (
        <Textarea
          value={response}
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
          value={response}
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
          value={response}
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
