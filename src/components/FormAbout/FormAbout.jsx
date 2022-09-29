import "./style.css";
import { Input } from "@chakra-ui/react";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
const FormAbout = ({ isCreatingNewForm }) => {
  const {
    dispatch,
    actions,
    formData: { title },
    formData: { description },
  } = useContext(FormContext);
  return (
    <div className="form-about">
      <Input
        className="form-title"
        fontSize={"6xl"}
        fontWeight={"semibold"}
        name="title"
        onChange={
          isCreatingNewForm ? (e) => dispatch(actions.updateValue(e)) : () => {}
        }
        value={title}
        padding={"8"}
        marginBlock={"5"}
        border={"none"}
      />

      <Input
        className="form-description"
        fontSize={"3xl"}
        fontWeight={"light"}
        color={"grey"}
        name="description"
        onChange={
          isCreatingNewForm ? (e) => dispatch(actions.updateValue(e)) : () => {}
        }
        value={description}
        padding={"8"}
        border={"none"}
      />
    </div>
  );
};
export default FormAbout;
