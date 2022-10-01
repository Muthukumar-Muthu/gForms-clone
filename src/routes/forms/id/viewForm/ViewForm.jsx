import { useContext } from "react";
import Navbar from "../../../../components/Navbar/Navbar";
import SubmitFormButton from "../../../../components/SubmitFormButton/SubmitFormButton";
import {
  ViewFormContext,
  ViewFormContextProvider,
} from "../../../../context/ViewFormContext";
import AnswerableFormQuestions from "../../../../components/AnswerableFormQuestions/AnswerableFormQuestions";
import NonEditableFormAbout from "../../../../components/NonEditableFormAbout/NonEditableFormAbout";

const ViewForm = () => {
  const {
    formData: { loading, error },
  } = useContext(ViewFormContext);

  return (
    <div style={{ backgroundColor: "#F0EBF8" }}>
      {loading ? (
        "loading..."
      ) : error ? (
        error
      ) : (
        <>
          <Navbar actionButton={<SubmitFormButton />} />
          <div className="newForm-container">
            <NonEditableFormAbout />
            <AnswerableFormQuestions />
          </div>
        </>
      )}
    </div>
  );
};
const ViewFormIncluded = () => (
  <ViewFormContextProvider>
    <ViewForm />
  </ViewFormContextProvider>
);

export default ViewFormIncluded;
