import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import CustomInput from "../components/customInputs/CustomInput";
import CustomButton from "../components/customButtons/CustomButton";
import CustomTextButton from "../components/customButtons/CustomTextButton";
import { useAuth } from "../context/AuthContext";

SplashScreen.preventAutoHideAsync();

const window = Dimensions.get("window");

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [appIsReady, setAppIsReady] = useState(false);
  const navigation = useNavigation();
  const { login } = useAuth();

  const switchToRegisterForm = () => {
    navigation.navigate("Register");
  };

  const handleLogin = () => {
    login(email, password);
  };

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({ Pacifico_400Regular });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      onLayout={onLayoutRootView}
    >
      <Text style={styles.headerText}>PhotoShare</Text>
      <View style={{ marginBottom: 30 }}>
        <CustomInput
          placeholder="Adres mailowy"
          placeholderTextColor="white"
          value={email}
          setValue={setEmail}
          type="classic"
        />
      </View>
      <View style={{ marginBottom: 30 }}>
        <CustomInput
          placeholder="Hasło"
          placeholderTextColor="white"
          value={password}
          setValue={setPassword}
          type="password"
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <CustomButton onPress={handleLogin} text="Zaloguj" />
      </View>
      <View style={styles.footer}>
        <Text style={{ color: "white", marginRight: 10 }}>
          Nie posiadasz konta?
        </Text>
        <CustomTextButton
          onPress={switchToRegisterForm}
          text="Zarejestruj się"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  headerText: {
    marginTop: 100,
    fontSize: 50,
    fontFamily: "Pacifico_400Regular",
    color: "white",
    padding: 20,
  },
  form: {
    padding: 20,
  },
  footer: {
    marginTop: window.height - 540,
    width: "100%",
    padding: 20,
    borderTopColor: "white",
    borderTopWidth: 0.17,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
