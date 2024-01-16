import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";

import FormsNavigator from "./routes/FormsNavigator";
import MainContentNavigator from "./routes/MainContentNavigator";
import { useAuth, AuthProvider } from "./context/AuthContext";

const Screens = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <MainContentNavigator /> : <FormsNavigator />;
};

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer theme={DarkTheme}>
        <Screens />
        <StatusBar barStyle="light-content" />
      </NavigationContainer>
    </AuthProvider>
  );
}
