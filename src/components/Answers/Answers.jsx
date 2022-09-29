import { Input, Textarea } from "@chakra-ui/react";

const Answers = ({ type, answering, responseHandler, responses, id }) => {
  switch (type) {
    case QUESTION_TYPE.SHORT_ANSWER: {
      return (
        <Input
          type={"text"}
          value={responses?.answer}
          onChange={(e) => {
            answering && responseHandler({ id, answer: e.target.value });
          }}
        />
      );
    }
    case QUESTION_TYPE.PARAGRAPH: {
      return (
        <Textarea
          value={responses?.answer}
          onChange={(e) => {
            answering && responseHandler({ id, answer: e.target.value });
          }}
        />
      );
    }
    case QUESTION_TYPE.DATE: {
      return (
        <Input
          type={"date"}
          value={responses?.answer}
          onChange={(e) => {
            answering && responseHandler({ id, answer: e.target.value });
          }}
        />
      );
    }
    case QUESTION_TYPE.TIME: {
      return (
        <Input
          type={"time"}
          value={responses?.answer}
          onChange={(e) => {
            answering && responseHandler({ id, answer: e.target.value });
          }}
        />
      );
    }
    default:
      return (
        <Input
          type={"text"}
          value={responses}
          onChange={(e) => {
            answering && responseHandler({ id, answer: e.target.value });
          }}
        />
      );
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
