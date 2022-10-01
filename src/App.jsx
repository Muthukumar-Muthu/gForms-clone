import { Routes, Route } from "react-router-dom";

import "./App.css";
import ViewForm from "./routes/forms/id/viewForm/ViewForm";
import NewForm from "./routes/forms/new/NewForm";
import Home from "./routes/home/Home";
import Login from "./routes/login/Login";
import PrivateRoute from "./routes/privateRoute/PrivateRoute";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<PrivateRoute />}>
        <Route index element={<Home />} />
        <Route path="forms">
          <Route path=":id">
            <Route path="viewform" element={<ViewForm />} />
            <Route path="responses" element />
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
