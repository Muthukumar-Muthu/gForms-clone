import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { useContext } from "react";

import { FormContext } from "../../context/FormContext";
const RequiredIcon = ({ question, type, id, required }) => {
  const { dispatch, actions } = useContext(FormContext);

  const requiredChangeHandler = (e) => {
    dispatch(
      actions.updateQuestion({
        question,
        type,
        id,
        required: !required,
        answer: "",
      })
    );
  };
  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="required" mb="0">
        Required
      </FormLabel>
      <Switch
        isChecked={required}
        id="required"
        onChange={requiredChangeHandler}
      />
    </FormControl>
  );
};
export default RequiredIcon;
