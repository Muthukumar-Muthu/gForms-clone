import { ArrowRightIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import {
  addDoc,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  collection,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../../context/FormContext";
import { db } from "../../firebase/firebaseConfig";
import { useToast } from "@chakra-ui/react";
import { ID } from "../../../userDetail";
const CreateFormButton = ({ isLoading, createForm }) => {
  const [isCreatingForm, setIsCreatingForm] = useState(false);
  const { formData } = useContext(FormContext);
  const navigate = useNavigate();
  const toast = useToast();

  async function createForm() {
    try {
      console.log(formData);
      setIsCreatingForm(true);
      const docRef = await addDoc(collection(db, "forms"), formData);
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
    } catch (error) {
      console.error(error);
      setIsCreatingForm(false);
      toast({
        title: "Error while creating form",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
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
