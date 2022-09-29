import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FormAbout from "../../../../components/FormAbout/FormAbout";
import FormQuestions from "../../../../components/FormQuestions/FormQuestions";
import { db } from "../../../../firebase/firebaseConfig";

const ViewForm = () => {
  const [formData, setFormData] = useState({
    loading: true,
    data: {},
    error: null,
  });
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
  return (
    <div>
      {formData.loading ? (
        "loading..."
      ) : formData.error ? (
        formData.error
      ) : (
        <FormAbout
          title={formData.data.title}
          description={formData.data.description}
          editable={false}
        />
      )}

      <FormQuestions
        responseHandler={responseHandler}
        responses={responses}
        answering={true}
        questions={formData.data.questions}
      />
    </div>
  );
};
export default ViewForm;
