import "./style.css";
import { Heading, Input, Text } from "@chakra-ui/react";
const FormAbout = ({ title, changeHandler, description }) => {
  return (
    <div className="form-about">
      <Input
        className="form-title"
        fontSize={"6xl"}
        fontWeight={"semibold"}
        name="title"
        onChange={changeHandler}
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
        onChange={changeHandler}
        value={description}
        padding={"8"}
        border={"none"}
      />
    </div>
  );
};
export default FormAbout;
