import React, { createContext, useState, useContext } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password) => {
    auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
      const user = userCredential.user;
      setIsAuthenticated(true);
    });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
