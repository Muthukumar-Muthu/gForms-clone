import { ArrowRightIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

const SubmitFormButton = ({ isLoading, submitFrom }) => {
  return (
    <Button
      marginLeft={"auto"}
      rightIcon={<ArrowRightIcon />}
      onClick={submitFrom}
      isLoading={isLoading}
    >
      Submit
    </Button>
  );
};
export default SubmitFormButton;
