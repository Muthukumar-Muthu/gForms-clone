import "./style.css";
import { Input } from "@chakra-ui/react";
import { useContext } from "react";

import { ViewFormContext } from "../../context/ViewFormContext";
const NonEditableFormAbout = () => {
  const {
    formData: {
      data: { title, description },
    },
  } = useContext(ViewFormContext);

  return (
    <div className="form-about">
      <Input
        className="form-title"
        fontSize={"6xl"}
        fontWeight={"semibold"}
        name="title"
        defaultValue={title}
        padding={"8"}
        marginBlock={"5"}
        border={"none"}
        readOnly
      />

      <Input
        className="form-description"
        fontSize={"3xl"}
        fontWeight={"light"}
        color={"grey"}
        name="description"
        readOnly
        defaultValue={description}
        padding={"8"}
        border={"none"}
      />
    </div>
  );
};
export default NonEditableFormAbout;
