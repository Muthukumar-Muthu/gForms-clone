import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormAbout from "../../../../components/FormAbout/FormAbout";
import FormQuestions from "../../../../components/FormQuestions/FormQuestions";
import Navbar from "../../../../components/Navbar/Navbar";
import { db } from "../../../../firebase/firebaseConfig";
import SubmitFormButton from "../../../../components/SubmitFormButton/SubmitFormButton";
import { FormContextProvider } from "../../../../context/FormContext";
import {
  ViewFormContext,
  ViewFormContextProvider,
} from "../../../../context/ViewFormContext";
import AnswerableAnswers from "../../../../components/AnswerableAnswer/AnswerableAnswer";
import AnswerableFormQuestions from "../../../../components/AnswerableFormQuestions/AnswerableFormQuestions";
import NonEditableFormAbout from "../../../../components/NonEditableFormAbout/NonEditableFormAbout";
const ViewForm = () => {
  console.log(useContext(ViewFormContext));

  const {
    formData: { loading, error },
  } = useContext(ViewFormContext);
  console.log(loading);
  return (
    <div>
      {loading ? (
        "loading..."
      ) : error ? (
        error
      ) : (
        <>
          <Navbar actionButton={<SubmitFormButton />} />
          <NonEditableFormAbout />
          <AnswerableFormQuestions />
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
