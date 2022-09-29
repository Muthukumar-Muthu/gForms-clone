import SingleQuestion from "../SingleQuestion/SingleQuestion";

const FormQuestions = ({ questions, updateNewQuestion, deleteQuestion }) => {
  return (
    <div className="form-questions">
      {questions.map((question) => (
        <SingleQuestion
          key={question.id}
          type={
            question.type === "" ? QUESTION_TYPE.SHORT_ANSWER : question.type
          }
          question={question.question}
          id={question.id}
          deleteQuestion={deleteQuestion}
          updateNewQuestion={updateNewQuestion}
          required={question?.required}
        />
      ))}
    </div>
  );
};
export default FormQuestions;

const QUESTION_TYPE = {
  SHORT_ANSWER: " SHORT_ANSWER",
  PARAGRAPH: "PARAGRAPH",
  //   multipleChoice: "multiple choice",
  //   checkboxes: "Checkboxes",
  //   dropDown: "Drop down",
  DATE: "DATE",
  TIME: "TIME",
};
