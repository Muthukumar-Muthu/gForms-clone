import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { UserContextProvider } from "./context/UserContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
