import { DeleteIcon } from "@chakra-ui/icons";
import { Input, Stack, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Answers from "../Answers/Answers";
import QuestionType from "../QuestionType/QuestionType";
import RequiredIcon from "../RequiredIcon/RequiredIcon";

import "./style.css";
const SingleQuestion = ({
  type,
  question,
  id,
  updateNewQuestion = () => {},
  deleteQuestion,
  required,
  answering,
  responseHandler,
  responses,
}) => {
  const newQuestionRef = useRef();
  useEffect(() => {
    newQuestionRef.current.focus();
  }, []);
  if (answering) {
    return (
      <div className="form-question">
        <Input
          ref={newQuestionRef}
          fontSize={"4xl"}
          fontWeight={"medium"}
          value={question}
          border={"none"}
          readOnly
        />
        <Answers
          id={id}
          responseHandler={responseHandler}
          responses={responses}
          answering={answering}
          type={type}
        />
      </div>
    );
  }

  return (
    <div className="form-question">
      <QuestionType
        question={question}
        required={required}
        updateNewQuestion={updateNewQuestion}
        id={id}
      />
      <Input
        ref={newQuestionRef}
        fontSize={"4xl"}
        fontWeight={"medium"}
        value={question}
        border={"none"}
        onChange={(e) => {
          updateNewQuestion({
            type,
            question: e.target.value,
            id,
            answer: "",
            required,
          });
        }}
      />
      <Answers type={type} />

      <Stack direction={"row"} justifyContent={"flex-end"}>
        <RequiredIcon
          question={question}
          type={type}
          id={id}
          updateNewQuestion={updateNewQuestion}
          required={required}
        />
        <DeleteIcon onClick={(e) => deleteQuestion({ id })} />
      </Stack>
    </div>
  );
};
export default SingleQuestion;

const QUESTION_TYPE = {
  SHORT_ANSWER: " SHORT_ANSWER",
  PARAGRAPH: "PARAGRAPH",
  //   multipleChoice: "multiple choice",
  //   checkboxes: "Checkboxes",
  //   dropDown: "Drop down",
  DATE: "DATE",
  TIME: "TIME",
};
