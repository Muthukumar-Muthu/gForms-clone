import { ArrowRightIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { ViewFormContext } from "../../context/ViewFormContext";

const SubmitFormButton = () => {
  const { submitForm, submittingForm } = useContext(ViewFormContext);
  return (
    <Button
      marginLeft={"auto"}
      rightIcon={<ArrowRightIcon />}
      onClick={submitForm}
      isLoading={submittingForm}
    >
      Submit
    </Button>
  );
};
export default SubmitFormButton;
