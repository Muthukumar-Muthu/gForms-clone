import "./style.css";
import { Input } from "@chakra-ui/react";
const FormAbout = ({ title, changeHandler, description, editable = false }) => {
  return (
    <div className="form-about">
      <Input
        className="form-title"
        fontSize={"6xl"}
        fontWeight={"semibold"}
        name="title"
        onChange={editable ? changeHandler : () => {}}
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
        onChange={editable ? changeHandler : () => {}}
        value={description}
        padding={"8"}
        border={"none"}
      />
    </div>
  );
};
export default FormAbout;
