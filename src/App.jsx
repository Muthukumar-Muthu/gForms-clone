import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/login" element />
      <Route path="/" element>
        <Route index element />
        <Route path="forms">
          <Route path=":id">
            <Route path="responses" element />
            <Route path="questions" element />
            <Route path="edit" element />
          </Route>
          <Route path="new" element />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
