import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { app } from "../firebase/firebaseConfig";
const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(getAuth(app), (user) => setUser(user));
  }, []);

  if (user === undefined) return "loading";

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
