import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import paths from "../../../firebase/paths";
import { db } from "../../../firebase/firebaseConfig";
import "./style.css";
const Responses = () => {
  const [responses, setResponses] = useState([]);
  const [formData, setFormData] = useState({
    loading: true,
    data: {},
    error: null,
  });
  const { id: formId } = useParams();
  useEffect(() => {
    async function getFormResponses(formId) {
      //get form responses array

      try {
        const formRef = doc(db, paths.FORMS, formId);
        const formSnap = await getDoc(formRef);
        if (formSnap.exists()) {
          const formData = formSnap.data();

          const { responses: responsesPath } = formData; //TODO: check spelling
          const responses = await Promise.allSettled(
            responsesPath.map(getResponses)
          );
          let modifiedResponses = responses
            .filter((res) => res.status === "fulfilled")
            .map((res) => res.value);
          setFormData({ data: formData, loading: false, error: null });
          setResponses(modifiedResponses);
        } else {
          throw new Error("No such form exists");
        }
      } catch (error) {
        setFormData({ data: {}, loading: false, error: JSON.stringify(error) });
        console.error(error);
      }
    }
    getFormResponses(formId);
  }, []);
  return (
    <div className="responses-wrapper">
      {formData.loading ? (
        "loading..."
      ) : formData.error ? (
        error
      ) : (
        <div className=" responses">
          <div className="about">
            <Text fontWeight={"block"} fontSize={"5xl"}>
              {formData.data.title}
            </Text>
            <Text fontWeight={"light"} fontSize={"4xl"}>
              {formData.data.description}
            </Text>
          </div>
          {formData.data.questions.map((question) => {
            return (
              <div key={question.id}>
                <Text fontSize={"4xl"}>{question.question}</Text>
                <div>
                  {responses.map((response) =>
                    [question.id] in response.responses ? (
                      <Text>{response.responses[question.id]}</Text>
                    ) : (
                      <Text fontSize={"3xl"} color={"tomato"}>
                        "unkown error"
                      </Text>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Responses;

//get indiviual respones
async function getResponses(responseObj) {
  const responsePath = responseObj.path;
  const responesRef = doc(db, responsePath);
  const responseSnap = await getDoc(responesRef);
  if (responseSnap.exists()) {
    console.log({ ...responseSnap.data(), id: responseSnap.id });

    return { ...responseSnap.data(), id: responseSnap.id };
  } else throw new Error(responseSnap.id + "No such response Exists");
}
