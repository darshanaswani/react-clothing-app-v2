import { createContext, useState, useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangeHandler,
} from "../utils/firebase.utils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentuser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeHandler((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
