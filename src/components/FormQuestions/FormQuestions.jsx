import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import SingleReadOnlyQuestion from "../SingleReadonlyQuestion/SingleReadonlyQuestion";

const FormQuestions = ({ isCreatingNewForm }) => {
  const {
    formData: { questions },
  } = useContext(FormContext);

  return (
    <div className="form-questions">
      {questions.map((question) => (
        <SingleReadOnlyQuestion
          key={question.id}
          isCreatingNewForm={isCreatingNewForm}
          id={question.id}
          question={question.question}
          type={question?.type}
          required={question?.required}
        />
      ))}
    </div>
  );
};
export default FormQuestions;
