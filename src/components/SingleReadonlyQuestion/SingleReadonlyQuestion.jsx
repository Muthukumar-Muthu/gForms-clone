import { DeleteIcon } from "@chakra-ui/icons";
import { Input, Stack } from "@chakra-ui/react";
import { useEffect, useRef, useContext } from "react";
import Answers from "../Answers/Answers";
import QuestionType from "../QuestionType/QuestionType";
import RequiredIcon from "../RequiredIcon/RequiredIcon";
import { FormContext } from "../../context/FormContext";
import "./style.css";

//question used while creating a new form
const SingleReadonlyQuestion = ({ type, question, id, required }) => {
  const { questionType, dispatch, actions } = useContext(FormContext);
  const checkedType = type == false ? questionType.SHORT_ANSWER : type;

  const newQuestionRef = useRef();

  useEffect(() => {
    newQuestionRef.current.focus();
  }, []);

  const questionChangeHandler = (e) => {
    dispatch(
      actions.updateQuestion({
        type: checkedType,
        question: e.target.value,
        id,
        answer: "",
        required,
      })
    );
  };

  return (
    <div className="form-question">
      <QuestionType question={question} required={required} id={id} />
      <Input
        ref={newQuestionRef}
        fontSize={"4xl"}
        fontWeight={"medium"}
        value={question}
        border={"none"}
        onChange={questionChangeHandler}
      />
      <Answers isCreatingNewForm={isCreatingNewForm} type={checkedType} />

      <Stack direction={"row"} justifyContent={"flex-end"}>
        <RequiredIcon
          question={question}
          type={checkedType}
          id={id}
          required={required}
        />
        <DeleteIcon onClick={() => dispatch(actions.deleteQuestion({ id }))} />
      </Stack>
    </div>
  );
};
export default SingleReadonlyQuestion;
/* if (!isCreatingNewForm) {
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
          isCreatingNewForm={isCreatingNewForm}
          type={checkedType}
        />
      </div>
    );
  }
*/
