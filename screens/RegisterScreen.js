import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Alert,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  BackHandler,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import CustomInput from "../components/customInputs/CustomInput";
import CustomButton from "../components/customButtons/CustomButton";
import CustomTextButton from "../components/customButtons/CustomTextButton";
import useMessageModal from "../hooks/useMessageModal";
import MessageTypes from "../components/modals/types";

import { auth } from "../firebase";
import MessageModal from "../components/modals/MessageModal";

SplashScreen.preventAutoHideAsync();

const window = Dimensions.get("window");

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [appIsReady, setAppIsReady] = useState(false);
  const navigation = useNavigation();
  const { messageModalState, hideMessageModal, showMessageModal } =
    useMessageModal();
  const handleProceed = () => {
    hideMessageModal();
  };

  const handleSingUp = () => {
    if (!email || !password || !confirmPassword || !name) {
      showMessageModal(
        MessageTypes.FAIL,
        "Uwaga!",
        "Wszystkie pola muszą być wypełnione.",
        handleProceed
      );
      return;
    }

    if (password !== confirmPassword) {
      return;
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          let errorMessage = "Coś poszło nie tak. Spróbuj ponownie.";

          if (error.code === "auth/weak-password") {
            errorMessage =
              "Hasło jest za słabe. Hasło powinno zawierać co najmniej 7 znaków w tym jedną duża literę 1 małą cyfrę oraz znak specjalny.";
          } else if (error.code === "auth/email-already-in-use") {
            errorMessage = "Adres email jest już używany. Wybierz inny adres.";
          } else if (error.code === "auth/invalid-email") {
            errorMessage = "Podano niepoprawny format adresu email.";
          }

          showMessageModal(
            MessageTypes.FAIL,
            "Uwaga!",
            errorMessage,
            handleProceed
          );
        });
    }
  };

  const switchToLoginForm = () => {
    navigation.navigate("Login");
  };

  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

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
          placeholder="Imie"
          placeholderTextColor="white"
          value={name}
          setValue={setName}
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
      <View style={{ marginBottom: 30 }}>
        <CustomInput
          placeholder="Potwierdź hasło"
          placeholderTextColor="white"
          value={confirmPassword}
          setValue={setConfirmPassword}
          type="password"
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <CustomButton onPress={handleSingUp} text="Zarejestruj się" />
      </View>
      <View style={styles.footer}>
        <Text style={{ color: "white", marginRight: 10 }}>
          Masz już konto ?
        </Text>
        <CustomTextButton onPress={switchToLoginForm} text="Zaloguj się" />
      </View>
      <MessageModal {...messageModalState} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  headerText: {
    marginTop: 20,
    fontSize: 50,
    fontFamily: "Pacifico_400Regular",
    color: "white",
    padding: 20,
  },
  form: {
    padding: 20,
  },
  footer: {
    marginTop: window.height - 600,
    width: "100%",
    padding: 20,
    borderTopColor: "white",
    borderTopWidth: 0.17,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default RegisterScreen;
