import { Button, useToast } from "@chakra-ui/react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebase/firebaseConfig";

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const loginHandler = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      await signInWithPopup(getAuth(app), googleProvider);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast({
        title: "Not able to sign in you",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <div className="login">
      <Button onClick={loginHandler}>Login With Google</Button>
    </div>
  );
};

export default Login;
