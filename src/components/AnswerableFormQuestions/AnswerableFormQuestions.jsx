import { useContext } from "react";

import { ViewFormContext } from "../../context/ViewFormContext";
import SingleAnswerableQuestion from "../SingleAnswerableQuestion/SingleAnswerableQuestion";

const AnswerableFormQuestions = () => {
  const {
    formData: {
      data: { questions },
    },
  } = useContext(ViewFormContext);
  return (
    <div className="form-questions">
      {questions.map((question) => (
        <SingleAnswerableQuestion
          key={question.id}
          id={question.id}
          question={question.question}
          type={question?.type}
          required={question?.required}
        />
      ))}
    </div>
  );
};
export default AnswerableFormQuestions;
