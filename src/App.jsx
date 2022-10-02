import { Routes, Route } from "react-router-dom";

import "./App.css";
import FormNavBar from "./components/FormNavBar/FormNavBar";
import ViewForm from "./routes/forms/id/viewForm/ViewForm";
import NewForm from "./routes/forms/new/NewForm";
import Home from "./routes/home/Home";
import Login from "./routes/login/Login";
import Responses from "./routes/forms/responses/Responses";
import PrivateRoute from "./routes/privateRoute/PrivateRoute";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<PrivateRoute />}>
        <Route index element={<Home />} />
        <Route path="forms">
          <Route path=":id" element={<FormNavBar />}>
            <Route path="viewform" element={<ViewForm />} />
            <Route path="responses" element={<Responses />} />
            {/*
            <Route path="questions" element />
            <Route path="edit" element /> */}
          </Route>
          <Route path="new" element={<NewForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
