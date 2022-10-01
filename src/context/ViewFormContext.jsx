import {
  addDoc,
  arrayUnion,
  collection,
  updateDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import { createContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase/firebaseConfig";
const ViewFormContext = createContext();

const { Provider } = ViewFormContext;

function ViewFormProvider({ children }) {
  const [formData, setFormData] = useState({
    loading: true,
    data: {
      title: "",
      description: "",
      questions: [],
    },
    error: null,
  });
  const navigate = useNavigate();
  const [submittingForm, setSubmittingForm] = useState(false);
  const [responses, setResponse] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getForm() {
      const form = await getDoc(doc(db, "forms", id));
      if (form.exists()) {
        {
          setFormData({
            loading: false,
            data: form.data(),
            id: form.id,
            error: null,
          });
          setResponse(
            form
              .data()
              .questions.map((question) => ({ id: question.id, answer: "" }))
          );
        }
      } else
        setFormData((p) => ({
          ...p,
          loading: false,
          error: "can't fetch the form rn",
        }));
    }
    getForm();
  }, []);

  function responseHandler({ id, answer }) {
    console.log(id, answer);
    setResponse((p) => {
      const q = p.map((question) =>
        question.id === id ? { id, answer } : question
      );
      console.log(q);
      return q;
    });
  }

  async function submitForm() {
    setSubmittingForm(true);
    const responeRef = await addDoc(collection(db, "responses"), {
      responses,
    });
    await updateDoc(doc(db, "forms", id), {
      responses: arrayUnion(responeRef),
    });
    setSubmittingForm(false);
    navigate("/");
  }
  return (
    <Provider
      value={{
        formData,
        submitForm,
        submittingForm,
        responseHandler,
        responses,
      }}
    >
      {children}
    </Provider>
  );
}

export { ViewFormContext, ViewFormProvider as ViewFormContextProvider };
