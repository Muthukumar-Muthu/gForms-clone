import AddNewQuestion from "../../../components/AddNewQuestion/AddNewQuestion";
import CreateFormButton from "../../../components/CreateFormButton/CreateFormButton";
import FormAbout from "../../../components/FormAbout/FormAbout";
import FormQuestions from "../../../components/FormQuestions/FormQuestions";
import Navbar from "../../../components/Navbar/Navbar";
import { FormContextProvider } from "../../../context/FormContext";
import "./style.css";

const NewForm = () => {
  const isCreatingNewForm = true;
  return (
    <div className="full-width-container">
      <Navbar actionButton={<CreateFormButton />} />
      <div className="newForm-container">
        <FormAbout />
        <FormQuestions />
        <AddNewQuestion isCreatingNewForm={isCreatingNewForm} />
      </div>
    </div>
  );
};
const FormContextIncluded = () => (
  <FormContextProvider>
    <NewForm />
  </FormContextProvider>
);

export default FormContextIncluded;
