import { Input } from "@chakra-ui/react";

import "./style.css";
import questionType from "../../questionTypes";
import AnswerableAnswers from "../AnswerableAnswer/AnswerableAnswer";
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
