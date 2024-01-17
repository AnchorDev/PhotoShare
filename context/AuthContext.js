import React, { createContext, useState, useContext } from "react";
import { auth } from "../firebase";
import useMessageModal from "../hooks/useMessageModal";
import MessageTypes from "../components/modals/types";
import MessageModal from "../components/modals/MessageModal";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const {
    messageModalState,
    hideMessageModal,
    showMessageModal,
    setIsProceeding,
  } = useMessageModal();

  const handleProceed = () => {
    setIsProceeding(true);
    auth.signOut().then(() => {
      setIsAuthenticated(false);
    });
    setIsProceeding(false);
    hideMessageModal();
  };

  const handleReject = () => {
    hideMessageModal();
  };

  const login = (email, password) => {
    if (!email || !password) {
      showMessageModal(
        MessageTypes.FAIL,
        "Uwaga!",
        "Wszystkie pola muszą być wypełnione.",
        handleProceed
      );
      return;
    } else
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setIsAuthenticated(true);
        })
        .catch((error) => {
          let errorMessage = "Wystąpił błąd podczas logowania.";

          if (error.message === "Invalid email format") {
            errorMessage = "Nieprawidłowy format adresu email.";
          }

          if (error.code === "auth/user-not-found") {
            errorMessage =
              "Nie znaleziono użytkownika o podanym adresie email.";
          }

          showMessageModal(
            MessageTypes.FAIL,
            "Uwaga!",
            errorMessage,
            handleReject
          );
        });
  };

  const logout = () => {
    showMessageModal(
      MessageTypes.DECISION,
      "Uwaga!",
      "Na pewno chcesz się wylogować?",
      handleProceed,
      { onReject: handleReject }
    );
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
      <MessageModal {...messageModalState} />
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
