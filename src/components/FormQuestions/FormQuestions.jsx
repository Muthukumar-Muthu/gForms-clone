import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import SingleQuestion from "../SingleQuestion/SingleQuestion";

const FormQuestions = ({ isCreatingNewForm }) => {
  const {
    formData: { questions },
    questionType,
  } = useContext(FormContext);

  return (
    <div className="form-questions">
      {questions.map((question) => (
        <SingleQuestion
          key={question.id}
          isCreatingNewForm={isCreatingNewForm}
          id={question.id}
          question={question.question}
          type={question?.type}
          required={question?.required}
          // responses={responses.find((response) => response.id === question.id)}
        />
      ))}
    </div>
  );
};
export default FormQuestions;
