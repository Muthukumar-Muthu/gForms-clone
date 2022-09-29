import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
const RequiredIcon = ({ updateNewQuestion, question, type, id, required }) => {
  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="required" mb="0">
        Required
      </FormLabel>
      <Switch
        isChecked={required}
        id="required"
        onChange={(e) =>
          updateNewQuestion({ question, type, id, required: !required })
        }
      />
    </FormControl>
  );
};
export default RequiredIcon;
