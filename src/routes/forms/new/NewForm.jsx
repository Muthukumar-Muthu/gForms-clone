import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { ID } from "../../../../userDetail";

import AddNewQuestion from "../../../components/AddNewQuestion/AddNewQuestion";
import CreateFormButton from "../../../components/CreateFormButton/CreateFormButton";
import FormAbout from "../../../components/FormAbout/FormAbout";
import FormQuestions from "../../../components/FormQuestions/FormQuestions";
import Navbar from "../../../components/Navbar/Navbar";
import { app, db } from "../../../firebase/firebaseConfig";
import "./style.css";

const formInitialState = {
  title: "untitled form",
  description: "form description",
  questions: [],
};
const NewForm = () => {
  const [formData, setFormData] = useState(formInitialState);
  const [creatingForm, setCreatingForm] = useState(false);
  const navigate = useNavigate();
  function changeHandler(e) {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((p) => ({ ...p, [name]: value }));
  }

  function addNewQuestion() {
    console.log("adding new question");
    setFormData((p) => {
      return {
        ...p,
        questions: [
          ...p.questions,
          {
            type: "",
            answer: "",
            id: uuid(),
            question: "Question here",
            required: true,
          },
        ],
      };
    });
  }

  function updateNewQuestion({
    id,
    question,
    type,
    answer = "",
    required = true,
  }) {
    setFormData((p) => {
      return {
        ...p,
        questions: p.questions.map((q) => {
          if (q.id === id) {
            return { id, question, type, answer, required };
          } else return q;
        }),
      };
    });
  }

  function deleteQuestion({ id }) {
    setFormData((p) => {
      return {
        ...p,
        questions: p.questions.filter((q) => {
          if (q.id === id) {
            return false;
          } else return true;
        }),
      };
    });
  }

  async function createForm() {
    console.log(formData);
    setCreatingForm(true);
    const docRef = await addDoc(
      collection(getFirestore(app), "forms"),
      formData
    );
    const userDoc = await getDoc(doc(db, "users", "" + ID));
    console.log(userDoc.ref.path);
    if (userDoc.exists()) {
      console.log("just updating the aray");
      await updateDoc(doc(db, "users", "" + ID), {
        forms: arrayUnion(docRef),
      });
    } else {
      console.log("creating a doc");

      await setDoc(doc(db, "users", "" + ID), {
        forms: [docRef],
      });
    }
    setCreatingForm(false);
    navigate("/");
  }
  return (
    <div className="full-width-container">
      <Navbar
        actionButton={
          <CreateFormButton isLoading={creatingForm} createForm={createForm} />
        }
      />
      <div className="newForm-container">
        <FormAbout
          title={formData.title}
          description={formData.description}
          changeHandler={changeHandler}
          editable
        />
        <FormQuestions
          updateNewQuestion={updateNewQuestion}
          questions={formData.questions}
          deleteQuestion={deleteQuestion}
        />
        <AddNewQuestion addNewQuestion={addNewQuestion} />
      </div>
    </div>
  );
};
export default NewForm;
