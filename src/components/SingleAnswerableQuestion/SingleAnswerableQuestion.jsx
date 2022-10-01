import { DeleteIcon } from "@chakra-ui/icons";
import { Input, Stack } from "@chakra-ui/react";
import { useEffect, useRef, useContext } from "react";
import Answers from "../Answers/Answers";
import QuestionType from "../QuestionType/QuestionType";
import RequiredIcon from "../RequiredIcon/RequiredIcon";
import { FormContext } from "../../context/FormContext";
import "./style.css";
import questionType from "../../questionTypes";
import AnswerableAnswers from "../AnswerableAnswer/AnswerableAnswer";
import { ViewFormContext } from "../../context/ViewFormContext";
//question used for answering a question
const SingleAnswerableQuestion = ({ type, question, id }) => {
  const checkedType = type == false ? questionType.SHORT_ANSWER : type;

  return (
    <div className="form-question">
      <div className="form-question">
        <Input
          fontSize={"4xl"}
          fontWeight={"medium"}
          defaultValue={question}
          border={"none"}
          readOnly
        />
        <AnswerableAnswers id={id} type={checkedType} />
      </div>
    </div>
  );
};
export default SingleAnswerableQuestion;
