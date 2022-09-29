import { Input, Textarea } from "@chakra-ui/react";

const Answers = ({
  type,
  isCreatingNewForm,
  responseHandler = () => {},
  responses = {},
  id = "d",
}) => {
  switch (type) {
    case QUESTION_TYPE.SHORT_ANSWER: {
      return (
        <Input
          type={"text"}
          value={isCreatingNewForm ? "" : responses?.answer}
          onChange={(e) => {
            !isCreatingNewForm &&
              responseHandler({ id, answer: e.target.value });
          }}
          readOnly={isCreatingNewForm}
        />
      );
    }
    case QUESTION_TYPE.PARAGRAPH: {
      return (
        <Textarea
          value={isCreatingNewForm ? "" : responses?.answer}
          onChange={(e) => {
            !isCreatingNewForm &&
              responseHandler({ id, answer: e.target.value });
          }}
          readOnly={isCreatingNewForm}
        />
      );
    }
    case QUESTION_TYPE.DATE: {
      return (
        <Input
          type={"date"}
          value={isCreatingNewForm ? "" : responses?.answer}
          onChange={(e) => {
            !isCreatingNewForm &&
              responseHandler({ id, answer: e.target.value });
          }}
          readOnly={isCreatingNewForm}
        />
      );
    }
    case QUESTION_TYPE.TIME: {
      return (
        <Input
          type={"time"}
          value={isCreatingNewForm ? "" : responses?.answer}
          onChange={(e) => {
            !isCreatingNewForm &&
              responseHandler({ id, answer: e.target.value });
          }}
          readOnly={isCreatingNewForm}
        />
      );
    }
    default:
      return (
        <Input
          type={"text"}
          value={responses}
          onChange={(e) => {
            !isCreatingNewForm &&
              responseHandler({ id, answer: e.target.value });
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
