import { ArrowRightIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import {
  addDoc,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../context/FormContext";

const CreateFormButton = ({ isLoading, createForm }) => {
  const [isCreatingForm, setIsCreatingForm] = useState(false);
  const { formData } = useContext(FormContext);
  const navigate = useNavigate();

  async function createForm() {
    console.log(formData);
    setIsCreatingForm(true);
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
    setIsCreatingForm(false);
    navigate("/");
  }
  return (
    <Button
      marginLeft={"auto"}
      rightIcon={<ArrowRightIcon />}
      onClick={createForm}
      isLoading={isCreatingForm}
    >
      Create
    </Button>
  );
};
export default CreateFormButton;
