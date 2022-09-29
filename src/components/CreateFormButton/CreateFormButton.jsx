import { ArrowRightIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

const CreateFormButton = ({ isLoading, createForm }) => {
  return (
    <Button
      marginLeft={"auto"}
      rightIcon={<ArrowRightIcon />}
      onClick={createForm}
      isLoading={isLoading}
    >
      Create
    </Button>
  );
};
export default CreateFormButton;
